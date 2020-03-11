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
-- Name: events; Type: TABLE; Schema: public; Owner: tpl1219_7
--

CREATE TABLE public.events (
    event_id integer NOT NULL,
    event_name text,
    category text,
    date text,
    location text
);


ALTER TABLE public.events OWNER TO tpl1219_7;

--
-- Name: events_event_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1219_7
--

CREATE SEQUENCE public.events_event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_event_id_seq OWNER TO tpl1219_7;

--
-- Name: events_event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1219_7
--

ALTER SEQUENCE public.events_event_id_seq OWNED BY public.events.event_id;


--
-- Name: user_events; Type: TABLE; Schema: public; Owner: tpl1219_7
--

CREATE TABLE public.user_events (
    id integer NOT NULL,
    event_id integer NOT NULL
);


ALTER TABLE public.user_events OWNER TO tpl1219_7;

--
-- Name: user_events_event_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1219_7
--

CREATE SEQUENCE public.user_events_event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_events_event_id_seq OWNER TO tpl1219_7;

--
-- Name: user_events_event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1219_7
--

ALTER SEQUENCE public.user_events_event_id_seq OWNED BY public.user_events.event_id;


--
-- Name: user_events_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1219_7
--

CREATE SEQUENCE public.user_events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_events_id_seq OWNER TO tpl1219_7;

--
-- Name: user_events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1219_7
--

ALTER SEQUENCE public.user_events_id_seq OWNED BY public.user_events.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl1219_7
--

CREATE TABLE public.users (
    name text,
    id integer NOT NULL
);


ALTER TABLE public.users OWNER TO tpl1219_7;

--
-- Name: users_userid_seq; Type: SEQUENCE; Schema: public; Owner: tpl1219_7
--

CREATE SEQUENCE public.users_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_userid_seq OWNER TO tpl1219_7;

--
-- Name: users_userid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1219_7
--

ALTER SEQUENCE public.users_userid_seq OWNED BY public.users.id;


--
-- Name: events event_id; Type: DEFAULT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.events ALTER COLUMN event_id SET DEFAULT nextval('public.events_event_id_seq'::regclass);


--
-- Name: user_events id; Type: DEFAULT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.user_events ALTER COLUMN id SET DEFAULT nextval('public.user_events_id_seq'::regclass);


--
-- Name: user_events event_id; Type: DEFAULT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.user_events ALTER COLUMN event_id SET DEFAULT nextval('public.user_events_event_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_userid_seq'::regclass);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: tpl1219_7
--

COPY public.events (event_id, event_name, category, date, location) FROM stdin;
9	Rap Gods	Music	03/21/2020	Oakland, CA
10	Drag Becomes Her	Drag	03/07/2020	San Francisco, CA
\.


--
-- Data for Name: user_events; Type: TABLE DATA; Schema: public; Owner: tpl1219_7
--

COPY public.user_events (id, event_id) FROM stdin;
4	10
4	9
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl1219_7
--

COPY public.users (name, id) FROM stdin;
poppy	4
Quincey Morningstar	6
Ariel Lyons	7
Coding Bat	8
\.


--
-- Name: events_event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1219_7
--

SELECT pg_catalog.setval('public.events_event_id_seq', 11, true);


--
-- Name: user_events_event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1219_7
--

SELECT pg_catalog.setval('public.user_events_event_id_seq', 1, true);


--
-- Name: user_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1219_7
--

SELECT pg_catalog.setval('public.user_events_id_seq', 1, false);


--
-- Name: users_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1219_7
--

SELECT pg_catalog.setval('public.users_userid_seq', 9, true);


--
-- Name: user_events event_id; Type: CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.user_events
    ADD CONSTRAINT event_id UNIQUE (event_id);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (event_id);


--
-- Name: user_events user_events_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.user_events
    ADD CONSTRAINT user_events_pkey PRIMARY KEY (id, event_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: user_events user_events_event_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.user_events
    ADD CONSTRAINT user_events_event_id_fkey FOREIGN KEY (event_id) REFERENCES public.events(event_id) ON DELETE CASCADE;


--
-- Name: user_events user_events_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl1219_7
--

ALTER TABLE ONLY public.user_events
    ADD CONSTRAINT user_events_id_fkey FOREIGN KEY (id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

