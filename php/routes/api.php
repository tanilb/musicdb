<?php declare(strict_types = 1);

use App\Models\Artist;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/artists', function (Request $request) {
    $artist = new Artist([
        "id" => "Sublime",
        "name" => "Sublime",
        "startedAt" => "1990-01-01"
    ]);

    return new JsonResponse($results);
});

Route::get('artists/{id}', function (Request $request){
    $artist = new Artist([
        "id" => "Sublime",
        "name" => "Sublime",
        "startedAt" => "1990-01-01",
    ]);

    return new JsonResponse($result);
});

Route::get('/artist', function (Request $request){
    $name = $request->get($request, 'World');

    return new JsonResponse([
        "message" => "Hello " . $name . "!"
    ]);
});

Route::get('/albums', function (Request $request){
    $name = $request->get($request, 'World');

    return new JsonResponse([
        "message" => "Hello " . $name . "!"
    ]);
});




Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
