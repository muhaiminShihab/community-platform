<?php

// include header
$page_title = 'Profile';
require_once './assets/layouts/header.php';

// middleware
if (!isset($_SESSION['user'])) {
	header("Location: index.php");
}

// logout user
if (isset($_GET['logout'])) {
	logout();
}

?>
<body>
    <div class="md:mt-10 mt-0">
		<div class="max-w-lg w-full mx-auto bg-gray-200 px-6 py-8 md:py-4 rounded-none md:rounded-md hover:bg-gray-300 transition-all">
			<h2 class="text-3xl font-extrabold">Hi, <?= $_SESSION['user']['name']; ?>!</h2>
			<p class="text-lg text-justify">
				Hope you're well. This is <a href="https://growtechbd.com" target="_blank" class="text-indigo-600 underline">Muhaimin Shihab</a> from "simpleDept", I would like to welcome you to this platform where we will discuss, learn, and make something new together everytime. I Hope we will make together a big platform.
			</p>
		</div>

		<div class="max-w-lg w-full mx-auto mt-6 text-center">
			<a href="./notices.php" class="bg-indigo-600 text-white px-4 py-2 rounded relative text-lg">Notices</a>
			<a href="./courses.php" class="bg-indigo-600 text-white px-4 py-2 rounded relative text-lg">Courses</a>
			<a href="./students.php" class="bg-indigo-600 text-white px-4 py-2 rounded relative text-lg">Students</a>
			<a href="profile.php?logout=logout" class="bg-indigo-600 text-white px-4 py-2 rounded relative text-lg">Log out</a>
		</div>
	</div>

    <!-- include footer -->
    <?php require_once './assets/layouts/footer.php'; ?>