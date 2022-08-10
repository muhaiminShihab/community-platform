<?php

// include header
$page_title = 'Sign Up';
require_once './assets/layouts/header.php';

// middleware
if (isset($_SESSION['user'])) {
  header("Location: profile.php");
}

// create user
if (isset($_POST['submit'])) {
  create_user($connection, $_POST['name'], $_POST['email'], $_POST['phone'], sha1($_POST['password']));
}

?>
<body>
    <!-- main area start -->
    <main id="app">
        <!-- registration area start -->
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
              <div>
                <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up and get start</h2>
              </div>
              <form class="mt-8 space-y-6" method="POST">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label for="full-name" class="sr-only">Full name</label>
                    <input id="full-name" name="name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full name">
                  </div>
                  <div>
                    <label for="email-address" class="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
                  </div>
                  <div>
                    <label for="phone-number" class="sr-only">Phone number</label>
                    <input id="phone-number" name="phone" type="tel" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone number">
                  </div>
                  <div>
                    <label for="password" class="sr-only">Password</label>
                    <input id="password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                  </div>
                </div>
          
                <div>
                  <button type="submit" name="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign up
                  </button>
                </div>

                <div class="text-center underline text-indigo-600">
                    <a href="./index.php">Already have an account? Click here.</a>
                </div>
              </form>
            </div>
          </div>
        <!-- registration area end -->

        <!-- include footer -->
        <?php require_once './assets/layouts/footer.php'; ?>