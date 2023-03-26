
use actix_cors::Cors;
use actix_web::{get, post, web::{self, Data}, App, HttpResponse, HttpServer, Responder, Error, HttpRequest};

use chrono::{DateTime, Utc};
use serde::{Serialize, Deserialize};

use futures_util::future::join_all;
use sqlite::Connection;

#[derive(Serialize, Deserialize)]
struct PostNote {
    note: String,
}

/// Version 2: Calls 4 queries in parallel, as an asynchronous handler
/// Returning Error types turn into None values in the response
async fn parallel_weather() -> impl Responder {
    // let fut_result = vec![
    //     db::execute(&db, Queries::GetTopTenHottestYears),
    //     db::execute(&db, Queries::GetTopTenColdestYears),
    //     db::execute(&db, Queries::GetTopTenHottestMonths),
    //     db::execute(&db, Queries::GetTopTenColdestMonths),
    // ];
    // let result: Result<Vec<_>, _> = join_all(fut_result).await.into_iter().collect();

    let obj = PostNote {
        note: "Hello".to_string(),
    };
    // HttpResponse::Ok().body("Hello world!")
    web::Json(obj)
}


#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn post_note(new_note: web::Json<PostNote>, request: HttpRequest) -> impl Responder {
    let obj = PostNote {
        note: new_note.note.clone(),
    };
    let utc: DateTime<Utc> = Utc::now(); 
    let formatted = format!("{}", utc.format("%Y/%m/%d %H:%M:%S"));
    let query = format!("INSERT INTO notes VALUES  ('{}', '{}' );",formatted, obj.note);
    // request.app_data::<Connection>().expect("Failed").
    println!("Query: {}", query);
    request.app_data::<Connection>().expect("Failed").execute(query).unwrap();
    web::Json(obj)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let connection = sqlite::open("notes.db").unwrap();

        // connection.iterate("SELECT name FROM sqlite_master 
        //                     WHERE type='table' AND name='notes';",
        //                       |pairs| {
        //                         for &(name, value) in pairs.iter() {
        //                             println!("{} = {}", name, value.unwrap());
        //                         }
        //                         true
        //                     }).unwrap();
        connection.execute("CREATE TABLE IF NOT EXISTS notes (
                            time_stamp datetime PRIMARY KEY,
                            note LONGTEXT NOT NULL )
                            ").unwrap();

        let cors = Cors::permissive();
        App::new()
            .app_data(connection)
            .wrap(cors)
            .service(hello)
            .service(echo)
            .route("/new_note", web::post().to(post_note))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
