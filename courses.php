<?php

// include header
$page_title = 'Courses';
require_once './assets/layouts/header.php';

// middleware
if (!isset($_SESSION['user'])) {
	header("Location: index.php");
}

// courses
$courses = courses($connection);

?>
<body>
    <!-- main area start -->
    <main id="app">
        <!-- courses area start -->
        <div class="max-w-6xl w-full mx-auto md:mt-10 px-6 py-8">
            <!-- back link -->
            <div class="text-left mb-10">
                <a href="./profile.php" class="bg-indigo-600 text-white px-4 py-2 rounded relative text-lg"><span><</span> Back</a>
            </div>
            <!-- title -->
            <div class="max-w-lg mx-auto sm:text-center text-justify">
                <h2 class="text-4xl font-extrabold">Course List</h2>
                <p class="text-lg">
                    We collect some awesome courses for you. That will be help you to start your web development, web design, or app development career as beginner.
                </p>
            </div>

            <!-- courses -->
            <div class="flex items-center justify-between flex-wrap mt-10">
                <?php foreach ($courses as $key => $course) { ?>
                <div class="max-w-md w-full px-6 py-4 bg-gray-200 rounded-md mb-3">
                    <a href="<?= $course['link'] ?>" target="_blank" class="text-indigo-600 list-item"><?= $course['name'] ?> - (Lang: <?= $course['language'] ?>)</a>
                </div>
                <?php } ?>
            </div>
        </div>
        <!-- courses area end -->
    </main>
    <!-- main area end -->
</body>