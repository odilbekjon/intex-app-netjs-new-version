
-- USERS
INSERT INTO intex_users(users_name, users_password, users_role) 
VALUES('Odilbek', 'odil0323', 'admin'),
      ('Asilbek', 'asilbek01', 'super_admin'),     
      ('Shoxruh', 'shoxruh02', 'stuff_admin');


-- PRODUCTS
INSERT INTO intex_products( product_name_ru, product_name_uz, product_price_old, product_price_new, product_count, product_frame_ru, product_frame_uz, product_size, product_depth, category_id, product_image)
VALUES('Металлический каркас', 'Metall ramka', '1.400.000 cym', '1.090.000 cym', 10, 'Металлический', 'Metall', '2,7', 60, 1, 'https://devel.prom.uz/upload/product_gallery/9c/2e/9c2e61622598dab77d9e151daf713948.jpg'),
      ('Металлический каркас', 'Metall ramka', '1.400.000 cym', '1.090.000 cym', 7, 'Металлический', 'Metall', '3,5', 76, 1, 'https://devel.prom.uz/upload/product_gallery/9c/2e/9c2e61622598dab77d9e151daf713948.jpg'),
      ('Рамка призмы', 'Prizma ramka', '1.800.000 cym', '1.520.000 cym', 10, 'Рамка призмы', 'Prizma ramka', '3.05', 76, 1, 'https://devel.prom.uz/upload/product_gallery/5f/e4/5fe4f900229457792997d2dd5792c142.jpg'),
      ('Прямоугольная рама', 'Tortburchaklar ramka', '1.800.000 cym', '1.520.000 cym', 10, 'Прямоугольная', 'Tortburchak', '3.05 x 2.20', 84, 1, 'https://devel.prom.uz/upload/product_gallery/cf/82/cf827c31864e781fdff302f459a112a9.jpg'),
      ('Рамка призмы', 'Prizma ramka', '1.800.000 cym', '1.520.000 cym', 10, 'Рамка призмы', 'Prizma ramka', '3.05', 76, 1, 'https://devel.prom.uz/upload/product_gallery/5f/e4/5fe4f900229457792997d2dd5792c142.jpg'),
      ('Рамка призмы', 'Prizma ramka', '1.800.000 cym', '1.520.000 cym', 10, 'Рамка призмы', 'Prizma ramka', '3.05', 76, 1, 'https://devel.prom.uz/upload/product_gallery/5f/e4/5fe4f900229457792997d2dd5792c142.jpg'),
      ('Прямоугольная рама', 'Tortburchaklar ramka', '1.800.000 cym', '1.520.000 cym', 10, 'Прямоугольная', 'Tortburchak', '2 x 4', 100, 1,'https://devel.prom.uz/upload/product_gallery/7e/d9/7ed98797de215cfbf776071cddaff5e1.jpg'),
      ('Надувной', 'Puflanadigan', '1.800.000 cym',  '1.520.000 cym', 10, 'Металлический', 'Metall', '3,66', 76, 2, 'https://devel.prom.uz/upload/product_gallery/14/a8/14a8ed68b194df7a21bf0b66c4a0f278.jpg'),
      ('Надувной', 'Puflanadigan', '1.800.000 cym',  '1.520.000 cym', 10, 'Металлический', 'Metall', '3,66', 76, 2, 'https://devel.prom.uz/upload/product_gallery/14/a8/14a8ed68b194df7a21bf0b66c4a0f278.jpg');
      

-- CATEGORY
INSERT INTO intex_category(category_name_ru, category_name_uz) VALUES('Каркасные', 'Ramka');
INSERT INTO intex_category(category_name_ru, category_name_uz) VALUES('Надувные', 'Puflanadigan');


-- ZAKAS
INSERT INTO intex_zakas(zakas_client, zakas_cl_phone, zakas_size, zakas_cost, zakas_address,  zakas_status, zakas_type, product_id, zakas_img)
VALUES('Nodir', '99 6071899', '2,7/60', '1.520.000', 'Yunusobod 15 Bogishamol kochasi  5-uy', true , 'orders', 1, ARRAY ['https://devel.prom.uz/upload/product_gallery/9c/2e/9c2e61622598dab77d9e151daf713948.jpg']),
      ('Otabek', '99 6071800', '3,5/76', '2.920.000', 'Yunusobod 15 Bogishamol kochasi  5-uy', false , 'orders', 2, ARRAY ['https://devel.prom.uz/upload/product_gallery/9c/2e/9c2e61622598dab77d9e151daf713948.jpg']),
      ('Aziz', '97 7072256', '3,5 x 2.20/84', '1200.000', 'Yunusobod 15 Bogishamol kochasi  5-uy', true , 'orders', 3,ARRAY ['https://devel.prom.uz/upload/product_gallery/cf/82/cf827c31864e781fdff302f459a112a9.jpg']),
      ('Humoyun', '94 4482555', '3,5 x 2.20/84', '2.920.000', 'Yunusobod 15 Bogishamol kochasi  5-uy', false , 'rders',8, ARRAY ['https://devel.prom.uz/upload/product_gallery/cf/82/cf827c31864e781fdff302f459a112a9.jpg']),
      ('Elchin', '97 0770588', '3.20/84', '2.420.000', 'Yunusobod 15 Bogishamol kochasi  5-uy', false , 'orders',9, ARRAY ['https://devel.prom.uz/upload/product_gallery/5f/e4/5fe4f900229457792997d2dd5792c142.jpg']);


-- CONSULTATIONS
INSERT INTO intex_consultations(consultation_client, consultation_cl_phone, consultation_status)
VALUES('Asror', '99 5121555', true),  
      ('Abduhalil', '95 5541188', false),  
      ('Sergrey', '97 8718887', false),  
      ('Muhammadaminxoja', '93 5884448', false),  
      ('Gulzoda', '94 4755921', true);


-- CITE
INSERT INTO intex_cite(cite_phone, cite_address_ru, cite_address_uz, cite_time_ru, cite_time_uz, cite_telegram, cite_instagram) 
VALUES('(998) 99 911 02 04', 'Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент','Toshkent shahri, Yashnobod tumani, Paxlavon Mahmud kochasi', 
'Будние дни: 10:00 - 22:00 Без выходных','Ish kunlari: 10:00 - 22:00 Dam olish kunlarisiz', 'https://www.telegram.com/intex-market_uz/', 
'https://www.instagram.com/intex-market_uz/');