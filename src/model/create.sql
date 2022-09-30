DROP DATABASE support;
CREATE DATABASE support;

-- USERS
DROP TABLE intex_users;
CREATE TABLE intex_users(
    users_id serial not null PRIMARY KEY ,
    users_name text not null,
    users_password varchar(64),
    users_role varchar(32)
);

-- PRODUCTS
DROP TABLE intex_products;
CREATE TABLE intex_products(
    product_id serial not null PRIMARY KEY ,
    product_name_ru text not null,
    product_name_uz text not null,
    product_price_old varchar(64) not null,
    product_price_new varchar(64) not null,
    product_count smallint not null, 
    product_frame_ru text not null,
    product_frame_uz text not null,
    product_size varchar(32) not null,
    product_depth int not null,
    product_status boolean default false not null,
    product_date timestamp with time zone not null default current_timestamp,
    product_image text [],
    category_id int,
    FOREIGN KEY (category_id)
    REFERENCES intex_category(category_id)
    ON DELETE CASCADE
);

-- CATEGORY
DROP TABLE intex_category;
CREATE TABLE intex_category(
    category_id serial not null PRIMARY KEY ,
    category_name_uz varchar(32) not null,
    category_name_ru varchar(32) not null
);

-- ZAKAS
DROP TABLE intex_zakas;
CREATE TABLE intex_zakas(
    zakas_id serial not null PRIMARY KEY ,
    zakas_client text not null ,
    zakas_cl_phone varchar(32) not null ,
    zakas_size varchar(32) not null ,
    zakas_cost varchar(32) not null ,
    zakas_address text not null ,
    zakas_time timestamp with time zone not null default current_timestamp,
    zakas_status boolean default false not null ,
    zakas_type varchar(32) not null ,
    zakas_img text [] ,
    product_id int REFERENCES intex_products(product_id)
);

-- CONSULTATIONS
DROP TABLE intex_consultations;
CREATE TABLE intex_consultations(
    consultation_id serial not null PRIMARY KEY ,
    consultation_client text not null ,
    consultation_cl_phone varchar(32) not null ,
    consultation_time timestamp with time zone not null default current_timestamp,
    consultation_status boolean default false not null
);

-- CITE
DROP TABLE intex_cite;
CREATE TABLE intex_cite(
    cite_id serial not null PRIMARY KEY,
    cite_phone varchar(64) not null,
    cite_address_ru text not null ,
    cite_address_uz text not null ,
    cite_time_ru varchar(120) not null,
    cite_time_uz varchar(240) not null,
    cite_telegram varchar(120) not null,
    cite_instagram varchar(120) not null
);