--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: individual_animals; Type: TABLE; Schema: public; Owner: tpl1219_7
--

CREATE TABLE public.individual_animals (
    id integer NOT NULL,
    nick_name text,
    common_name text,
    date_recorded timestamp with time zone DEFAULT now()
);


ALTER TABLE public.individual_animals OWNER TO tpl1219_7;

--
-- Name: individual_animals_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1219_7
--

CREATE SEQUENCE public.individual_animals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.individual_animals_id_seq OWNER TO tpl1219_7;

--
-- Name: individual_animals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1219_7
--

ALTER SEQUENCE public.individual_animals_id_seq OWNED BY public.individual_animals.id;


--
-- Name: sightings; Type: TABLE; Schema: public; Owner: tpl1219_7
--

CREATE TABLE public.sightings (
    animals_name text,
    sighting_location text,
    health_status text,
    researchers_email text,
    date_recorded timestamp with time zone DEFAULT now()
);


ALTER TABLE public.sightings OWNER TO tpl1219_7;

--
-- Name: species; Type: TABLE; Schema: public; Owner: tpl1219_7
--

CREATE TABLE public.species (
    id integer NOT NULL,
    common_name text,
    scientific_name text,
    existing_in_wild integer,
    conservation_status text,
    date_recorded timestamp with time zone DEFAULT now()
);


ALTER TABLE public.species OWNER TO tpl1219_7;

--
-- Name: species_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1219_7
--

CREATE SEQUENCE public.species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.species_id_seq OWNER TO tpl1219_7;

--
-- Name: species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1219_7
--

ALTER SEQUENCE public.species_id_seq OWNED BY public.species.id;


--
-- Name: individual_animals id; Type: DEFAULT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.individual_animals ALTER COLUMN id SET DEFAULT nextval('public.individual_animals_id_seq'::regclass);


--
-- Name: species id; Type: DEFAULT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.species ALTER COLUMN id SET DEFAULT nextval('public.species_id_seq'::regclass);


--
-- Data for Name: individual_animals; Type: TABLE DATA; Schema: public; Owner: tpl1219_7
--

COPY public.individual_animals (id, nick_name, common_name, date_recorded) FROM stdin;
1	Larry	Amur Leopard	2020-03-11 20:09:34.291075-07
2	Rico	Black Rhino	2020-03-11 20:16:27.131616-07
3	Pongo	Bornean Orangutan	2020-03-11 20:18:11.929534-07
4	Lilly	Tiger	2020-03-11 20:18:59.856612-07
5	Robyn	Black Rhino	2020-03-11 20:42:28.576568-07
6	Lo	Amur Leopard	2020-03-11 20:42:58.287457-07
7	Betty	Bornean Orangutan	2020-03-11 20:43:52.223586-07
8	Kale	Tiger	2020-03-11 20:44:25.399561-07
\.


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: tpl1219_7
--

COPY public.sightings (animals_name, sighting_location, health_status, researchers_email, date_recorded) FROM stdin;
Larry	Las Vegas, NV	intoxicated	lizbits@gmail.com	2020-03-11 20:25:32.493012-07
Lo	Las Vegas, NV	intoxicated	lizbits@gmail.com	2020-03-11 20:45:12.090278-07
Lilly	Pismo Beach, CA	sunburnt	whereiswaldo@gmail.com	2020-03-11 20:46:53.953279-07
Kale	Pismo Beach, CA	overheating	whereiswaldo@gmail.com	2020-03-11 20:47:10.451065-07
Betty	Whole Food Market SF	hungry	toomanymonkeys@gmail.com	2020-03-11 20:49:06.987952-07
\.


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: tpl1219_7
--

COPY public.species (id, common_name, scientific_name, existing_in_wild, conservation_status, date_recorded) FROM stdin;
1	Amur Leopard	Panthera pardus orientalis	84	CR	\N
3	Black Rhino	Diceros bicornis	5500	CR	2020-03-11 18:43:57.570143-07
4	Bornean Orangutan	Pongo pygmaeus	104700	CR	2020-03-11 18:46:52.625847-07
5	Tiger	Panthera tigris	3900	EN	2020-03-11 18:48:55.159464-07
\.


--
-- Name: individual_animals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1219_7
--

SELECT pg_catalog.setval('public.individual_animals_id_seq', 1, false);


--
-- Name: species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1219_7
--

SELECT pg_catalog.setval('public.species_id_seq', 5, true);


--
-- Name: individual_animals individual_animals_id_key; Type: CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.individual_animals
    ADD CONSTRAINT individual_animals_id_key UNIQUE (id);


--
-- Name: individual_animals individual_animals_nick_name_key; Type: CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.individual_animals
    ADD CONSTRAINT individual_animals_nick_name_key UNIQUE (nick_name);


--
-- Name: individual_animals individual_animals_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.individual_animals
    ADD CONSTRAINT individual_animals_pkey PRIMARY KEY (id);


--
-- Name: species species_common_name_key; Type: CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_common_name_key UNIQUE (common_name);


--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_pkey PRIMARY KEY (id);


--
-- Name: species species_scientific_name_key; Type: CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_scientific_name_key UNIQUE (scientific_name);


--
-- Name: sightings sightings_animals_name_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_animals_name_fkey FOREIGN KEY (animals_name) REFERENCES public.individual_animals(nick_name);


--
-- PostgreSQL database dump complete
--

