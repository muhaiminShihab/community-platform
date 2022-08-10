<?php

// include header
$page_title = 'Notices';
require_once './assets/layouts/header.php';

// middleware
if (!isset($_SESSION['user'])) {
	header("Location: index.php");
}

// notices
$notices = notices($connection);

?>
<body>
    <!-- main area start -->
    <main id="app">
        <!-- students area start -->
        <div class="max-w-6xl w-full mx-auto md:mt-10 px-6 py-8">
            <!-- back link -->
            <div class="text-left mb-10">
                <a href="./profile.php" class="bg-indigo-600 text-white px-4 py-2 rounded relative text-lg"><span><</span> Back</a>
            </div>

            <!-- title -->
            <div class="max-w-lg mx-auto text-center mb-10">
                <h2 class="text-4xl font-extrabold">All Notices</h2>
                <p class="text-lg">
                    All notices of our CT 19-20 batch.
                </p>
            </div>

            <!-- notices -->
            <?php foreach ($notices as $key => $notice) { ?>
            <div class="bg-gray-200 p-4 max-w-lg w-full mt-6 rounded-md mx-auto">
                <h2 class="text-xl font-extrabold"><?= $notice['title'] ?></h2>
                <p class="text-justify">
                    <?= $notice['note'] ?>
                </p>
            </div>
            <?php } ?>
            
            
        </div>
        <!-- courses area end -->
    </main>
    <!-- main area end -->
</body>