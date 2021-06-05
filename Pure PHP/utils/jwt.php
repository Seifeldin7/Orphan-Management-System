<?php

declare(strict_types=1);

use Firebase\JWT\JWT;

require_once(__DIR__ . '/../vendor/autoload.php');

class JwtUtils
{

    private $serverName;

    private $secretKey;
    function __construct()
    {
        $this->serverName = "etbara3.com";
        //shouldn't be stored on github (should be in a .env file)
        $this->secretKey = 'bGS6lzFqvvSQ8ALbOxatm7/Vk7mLQyzqaS34Q4oR1ew=';
    }

    function generateToken($userId)
    {
        $tokenId    = base64_encode(random_bytes(16));
        $issuedAt   = new DateTimeImmutable();
        $expire     = $issuedAt->modify('+6 minutes')->getTimestamp();      // Add 60 seconds
        $userId   = $userId;                                           // Retrieved from filtered POST data

        // Create the token as an array
        $data = [
            'iat'  => $issuedAt->getTimestamp(),    // Issued at: time when the token was generated
            'jti'  => $tokenId,                     // Json Token Id: an unique identifier for the token
            'iss'  => $this->serverName,                  // Issuer
            'nbf'  => $issuedAt->getTimestamp(),    // Not before
            'exp'  => $expire,                      // Expire
            'data' => [                             // Data related to the signer user
                'userId' => $userId,            // User name
            ]
        ];

        // Encode the array to a JWT string.
        return JWT::encode(
            $data,      //Data to be encoded in the JWT
            $this->secretKey, // The signing key
            'HS512'     // Algorithm used to sign the token, see https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40#section-3
        );
    }

    function validateToken($jwt)
    {
        JWT::$leeway += 60;
        $token = JWT::decode((string)$jwt, $this->secretKey, ['HS512']);
        $now = new DateTimeImmutable();
        if (
            $token->iss !== $this->serverName ||
            $token->nbf > $now->getTimestamp() ||
            $token->exp < $now->getTimestamp()
        ) {
            return false;
        }
        return true;
    }

    function extractJwtToken()
    {
        preg_match('/Bearer\s(\S+)/', $_SERVER['HTTP_AUTHORIZATION'], $matches);
        return $matches[1];
    }

    function getUserIdFromToken($decodedToken)
    {
        return $decodedToken->data->userId;
    }
}
