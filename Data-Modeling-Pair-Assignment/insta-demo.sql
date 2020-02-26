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
-- Name: hearted_photos; Type: TABLE; Schema: public; Owner: tpl1219_7
--

CREATE TABLE public.hearted_photos (
    photo_id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.hearted_photos OWNER TO tpl1219_7;

--
-- Name: photos; Type: TABLE; Schema: public; Owner: tpl1219_7
--

CREATE TABLE public.photos (
    photo_id integer NOT NULL,
    photo_url text,
    user_id integer NOT NULL,
    date_added text
);


ALTER TABLE public.photos OWNER TO tpl1219_7;

--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl1219_7
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username text,
    email text,
    date_joined text
);


ALTER TABLE public.users OWNER TO tpl1219_7;

--
-- Data for Name: hearted_photos; Type: TABLE DATA; Schema: public; Owner: tpl1219_7
--

COPY public.hearted_photos (photo_id, user_id) FROM stdin;
14	1
12	1
11	1
13	1
\.


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: tpl1219_7
--

COPY public.photos (photo_id, photo_url, user_id, date_added) FROM stdin;
10	owifwog	1	20-10-02-20
11	woeifjw	1	2010-02-20
12	owiefnwo	2	2020-09-20
13	owiehhwo	3	2020-19-20
14	owiellwo	1	2012-19-20
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl1219_7
--

COPY public.users (id, username, email, date_joined) FROM stdin;
1	Quincey Hollman	qhollman@gmail.com	2010-02-20
2	Marcel Ortega	marcel@gmail.com	2010-03-20
3	Bobby Sanda	bobby@gmail.com	2010-03-20
\.


--
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (photo_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: hearted_photos hearted_photos_photo_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.hearted_photos
    ADD CONSTRAINT hearted_photos_photo_id_fkey FOREIGN KEY (photo_id) REFERENCES public.photos(photo_id);


--
-- Name: hearted_photos hearted_photos_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.hearted_photos
    ADD CONSTRAINT hearted_photos_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

