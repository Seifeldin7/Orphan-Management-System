-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2021 at 11:41 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `orphanage`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `governorate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `block_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lat` decimal(10,7) NOT NULL,
  `long` decimal(10,7) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `user_id`, `governorate`, `street`, `block_number`, `lat`, `long`, `created_at`, `updated_at`) VALUES
(1, 1, 'Cairo', '', '24', '0.0000000', '0.0000000', NULL, '2021-05-31 15:32:28');

-- --------------------------------------------------------

--
-- Table structure for table `credit_cards`
--

CREATE TABLE `credit_cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `number` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cvv` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` bigint(20) NOT NULL,
  `name` varchar(222) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `image`) VALUES
(24, 'Food', 'https://image.shutterstock.com/image-photo/closeup-poor-staring-hungry-orphan-260nw-1474015616.jpg'),
(25, 'Food', 'https://image.shutterstock.com/image-photo/closeup-poor-staring-hungry-orphan-260nw-1474015616.jpg'),
(26, 'seif', 'swas'),
(27, 'seif', 'swas');

-- --------------------------------------------------------

--
-- Table structure for table `item_donations`
--

CREATE TABLE `item_donations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `item_id` int(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `org_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_donations`
--

INSERT INTO `item_donations` (`id`, `user_id`, `item_id`, `created_at`, `org_id`) VALUES
(1, 1, 1, '2021-05-19 21:31:44', 1),
(2, 2, 1, '2021-05-14 22:22:15', 1),
(3, 1, 24, '2021-06-07 21:06:28', 1),
(4, 1, 24, '2021-06-07 21:06:34', 1),
(5, 1, 24, '2021-06-07 21:06:51', 1),
(6, 1, 24, '2021-06-07 21:07:26', 1),
(7, 1, 24, '2021-06-07 21:10:46', 1),
(8, 1, 24, '2021-06-07 21:24:56', 1);

-- --------------------------------------------------------

--
-- Table structure for table `item_donations_details`
--

CREATE TABLE `item_donations_details` (
  `id` int(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `scheduled_date` varchar(255) NOT NULL,
  `delivery_method` smallint(6) NOT NULL,
  `donation_number` int(11) NOT NULL,
  `item_donation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `item_donations_details`
--

INSERT INTO `item_donations_details` (`id`, `amount`, `scheduled_date`, `delivery_method`, `donation_number`, `item_donation_id`) VALUES
(1, 1, '6666', 1, 1, 1),
(2, 1, 'wad', 1, 0, 2),
(15, 1, '', 1, 0, 7),
(16, 2, 'Tue Jun 08 2021 23:24:49 GMT+0200 (Eastern European Standard Time)', 0, 0, 8);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(2, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_04_23_223621_create_profiles_table', 1),
(5, '2019_04_27_004507_create_posts_table', 1),
(6, '2019_04_29_020438_creates_profile_user_pivot_table', 1),
(7, '2021_05_24_144224_create_money_donations_table', 1),
(8, '2021_05_24_144234_create_item_donations_table', 1),
(34, '2014_10_12_000000_create_users_table', 2),
(35, '2018_08_08_100000_create_telescope_entries_table', 2),
(36, '2019_08_19_000000_create_failed_jobs_table', 2),
(37, '2021_05_25_161937_create_money_donations_table', 2),
(38, '2021_05_25_162005_create_item_donations_table', 2),
(39, '2021_05_25_201538_create_credit_cards_table', 2),
(40, '2021_05_25_202539_create_addresses_table', 2),
(41, '2021_05_31_141041_create_organizations_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `money_donations`
--

CREATE TABLE `money_donations` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `card_id` int(10) UNSIGNED NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `org_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `money_donations`
--

INSERT INTO `money_donations` (`id`, `user_id`, `card_id`, `amount`, `created_at`, `org_id`) VALUES
(1, 1, 1, 10, '2021-06-06 21:58:29', 1),
(2, 15, 1, 5, '2021-06-06 21:58:48', 0),
(3, 15, 1, 6, '2021-06-06 22:02:37', 0),
(4, 15, 1, 5, '2021-06-06 22:10:31', 1),
(5, 15, 1, 5, '2021-06-06 22:12:04', 2);

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mission` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `yearFouned` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  `yearsFundraising` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `projectsFunded` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facebookPage` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `website` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `type`, `name`, `mission`, `description`, `yearFouned`, `yearsFundraising`, `projectsFunded`, `facebookPage`, `website`, `phone`, `image`, `address_id`, `created_at`, `updated_at`) VALUES
(1, 'Education', 'EDU', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '2014', '3', '0', 'facebook.com', 'google.com', '01112421718', 'https://thumbs.dreamstime.com/b/pretty-little-girl-long-brown-hair-beautiful-dirty-face-posing-summer-nature-outdoor-orphan-child-war-poor-pretty-174744046.jpg', 1, NULL, NULL),
(2, 'Food', 'Fook Bank', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', '', '', '', '', '', '', 'https://www.humanitygives.com/wp-content/uploads/2017/08/orphan-appeal-charities-in-uk.jpg', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `national_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(400) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `phone_number`, `national_id`, `email`, `email_verified_at`, `password`, `token`, `created_at`, `updated_at`) VALUES
(1, 'Seif', '0111111111', NULL, 's.seif26@yahoo.com', NULL, '$2y$10$FzIoe01.7ZaZH0TY6iS5zeAmVzp/Px5yQLyBW258IDiUdxnzSDxyW', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MjMxMDExNDcsImp0aSI6IjJuQkU3NHYzVU9SeE40NmZHOWRUaUE9PSIsImlzcyI6ImV0YmFyYTMuY29tIiwibmJmIjoxNjIzMTAxMTQ3LCJleHAiOjE2MjMxMDQxNDcsImRhdGEiOnsidXNlcklkIjoiMSJ9fQ.JonDf6JTgMN3Aa2jy6FhmP_14wOb5yIKOLpULmrnuf4JLj8LwNCifKRerdT6ANlCrqS4ARaV2qaGthxTve98Ug', '2021-05-31 13:49:23', '2021-05-31 15:52:17'),
(2, 'seif', '0111111111', '1234', 's.seif26@yaho.com', NULL, '$2y$10$y3OPKYeF9K6oBQ02iHk7LuS2ThVu6vi5hZP9svu15mAN6u.04dk/e', NULL, NULL, NULL),
(7, 'seif', '0111111111', '1234', 's.seif26@yahoooo.com', NULL, '$2y$10$EQH.g1jRXdTwUm2b8.R3Numk4Gz/69hteM4ngVjZqQzcMFrIlSZNa', NULL, NULL, NULL),
(15, 'seif', '0111111111', '1234', 's.seif26@yahooo.com', NULL, '$2y$10$sMnRX5UDMMjz2QNgWDIed.4VfK7LlWOlCcaXlUiok9M4LtuiSdCYC', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MjI4NTM2NDUsImp0aSI6ImpKZWFNeFRMNjNKZ2xIdjIxQm1Ed0E9PSIsImlzcyI6ImV0YmFyYTMuY29tIiwibmJmIjoxNjIyODUzNjQ1LCJleHAiOjE2MjI4NTQwMDUsImRhdGEiOnsidXNlcklkIjoiMTUifX0.AXkLCxxITMCORJLCgUJkja9tGhF2s9MTthkQTTBOtmjOMKJvw2QgIgrJ8rnqaZWUV739j2v-aqYdhGbOHMtyHA', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `addresses_user_id_unique` (`user_id`);

--
-- Indexes for table `credit_cards`
--
ALTER TABLE `credit_cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_donations`
--
ALTER TABLE `item_donations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_donations_details`
--
ALTER TABLE `item_donations_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `money_donations`
--
ALTER TABLE `money_donations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `credit_cards`
--
ALTER TABLE `credit_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `item_donations`
--
ALTER TABLE `item_donations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `item_donations_details`
--
ALTER TABLE `item_donations_details`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `money_donations`
--
ALTER TABLE `money_donations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
