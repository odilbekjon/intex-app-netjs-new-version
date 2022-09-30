SELECT * FROM intex_products WHERE product_id = 1;


SELECT category_id AS id , category_name_uz AS nameUz , category_name_ru AS nameRu FROM intex_category;
UPDATE intex_products SET product_name = 'Металлический каркас' WHERE product_id = 1;
DELETE FROM intex_products WHERE product_id = 1;


TRUNCATE TABLE intex_products;
DROP TABLE intex_products;



SELECT product_id AS id, product_name AS name , product_type AS type , 
product_price_old AS priceOld , product_price_new AS priceNew , 
product_count AS count, product_frame AS frame , product_size AS size , 
product_depth AS depth, product_date AS date, product_image AS img , 
category_id AS categoryId 
FROM intex_products;


SELECT zakas_id AS id, zakas_client AS client, zakas_cl_phone AS phone, zakas_size AS size, zakas_cost AS cost, zakas_address AS address, zakas_time AS time, zakas_status AS status, zakas_type AS type, zakas_img AS img FROM intex_zakas;  


SELECT consultation_id AS id, consultation_client AS client, consultation_cl_phone AS phone,
consultation_time AS time, consultation_status AS status FROM intex_consultations;


SELECT cite_id AS id, cite_phone AS phone, cite_address AS address, cite_time AS time, cite_telegram AS telegram, cite_instagram AS instagram FROM intex_cite;