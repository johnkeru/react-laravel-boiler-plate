<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel 9 vite with react</title>
        <style>
            body{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            },
            li{
                list-style: none;
            }
           .pagination{
                list-style: none;
                display: flex;
                justify-content : center;
                align-items : center;
                margin-bottom : 5rem;
                font-size: 1.2rem;
                gap: 5px;
            }
            .pagination .page-num{
                padding: 8px 15px;
                cursor: pointer;
                border-radius: 3px;
                font-weight: 400;
            }
            .pagination .page-num:hover{
                background-color: #5AB188;
                color:#fff;
            }
            .pagination .active{
                background-color: #5AB188;
            }
        </style>
        @viteReactRefresh
        @vite('resources/js/index.jsx')
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>