<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Кроп Діагност</title>
    <link href="{{ mix('/css/vendor.css') }}" rel="stylesheet">
    <link href="{{ mix('/css/about-us-and-tc.css') }}" rel="stylesheet">
</head>
<body>


<div class="root">
    <div class="app">
        <div class="header container-fluid">
            <div class="col-1">
                <div class="logo">
                    <img src="/images/logo.svg" alt="logo">
                </div>
            </div>
            <div class="col-11">
                <h2><a href="/">Krop Diagnostics</a></h2>
            </div>
        </div>
    </div>
    <main id="main" class="site-main main mt-5">
        <section class="section">
            <div class="container">
                <div class="row">
                    <div id="primary" class="content-area col-md-12">
                        <div id="content" class="site-content" role="main">
                            <div class="page type-page status-publish hentry">
                                <header class="entry-header">
                                    <h1 class="entry-title text-center">Onix-Systems Inc.</h1>
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
@include('firebase-analytics')
</body>
</html>
