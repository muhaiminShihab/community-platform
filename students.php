<?php

// include header
$page_title = 'Students';
require_once './assets/layouts/header.php';

// middleware
if (!isset($_SESSION['user'])) {
	header("Location: index.php");
}

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
                <h2 class="text-4xl font-extrabold">Student List</h2>
                <p class="text-lg">
                    This is a list of our CT 19-20 batch.
                </p>
            </div>

            <!-- students -->
            <div class="max-w-6xl w-full flex justify-center flex-wrap" id="student_list"></div>
            
        </div>
        <!-- courses area end -->
    </main>
    <!-- main area end -->

    <!-- Students JS -->
    <script src="./assets/js/students.js"></script>
    <script>
        const student = () => {
            const studentListId = document.getElementById('student_list');
            let studentCard = "";
            students.map(student => {
                studentCard += '<div class="bg-gray-200 p-4 rounded-md max-w-md w-full mt-6 mx-auto"><div class="w-40 h-40 rounded-full mx-auto overflow-hidden mb-6"><img class="w-full" src="'+ rootLink+student.img +'" alt=""></div><div class="text-center pl-2"><h2 class="text-xl font-extrabold">'+ student.name +'</h2><h2 class="text-xl">Board Roll: '+ student.roll +'</h2><h2 class="text-xl">Blood Group: '+ student.blood +'</h2></div></div>';
            });
            studentListId.innerHTML = studentCard;
        };

        student();
    </script>
</body>