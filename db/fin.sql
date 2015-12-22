--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.5
-- Dumped by pg_dump version 9.4.0
-- Started on 2015-12-19 21:25:42

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 185 (class 3079 OID 11855)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2074 (class 0 OID 0)
-- Dependencies: 185
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_with_oids = false;

--
-- TOC entry 175 (class 1259 OID 23203)
-- Name: Accounts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Accounts" (
    id integer NOT NULL,
    name character varying(256),
    description character varying(512),
    ammount numeric(20,2),
    currency character varying(20),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "SubjectId" integer
);


--
-- TOC entry 174 (class 1259 OID 23201)
-- Name: Accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Accounts_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2075 (class 0 OID 0)
-- Dependencies: 174
-- Name: Accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Accounts_id_seq" OWNED BY "Accounts".id;


--
-- TOC entry 176 (class 1259 OID 23217)
-- Name: Currencies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Currencies" (
    id character varying(6) NOT NULL,
    name character varying(32),
    nominal integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- TOC entry 180 (class 1259 OID 23235)
-- Name: Favorites; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Favorites" (
    id integer NOT NULL,
    "order" integer DEFAULT 0,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "SubjectId" integer,
    "UserId" integer
);


--
-- TOC entry 179 (class 1259 OID 23233)
-- Name: Favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Favorites_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2076 (class 0 OID 0)
-- Dependencies: 179
-- Name: Favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Favorites_id_seq" OWNED BY "Favorites".id;


--
-- TOC entry 182 (class 1259 OID 23254)
-- Name: Operations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Operations" (
    id integer NOT NULL,
    date timestamp with time zone,
    type character varying(20),
    "orderNumber" character varying(64),
    tax numeric(20,2),
    paid numeric(20,2),
    "mustPay" numeric(20,2),
    given numeric(20,2),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "fromAccountId" integer,
    "toAccountId" integer
);


--
-- TOC entry 181 (class 1259 OID 23252)
-- Name: Operations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Operations_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2077 (class 0 OID 0)
-- Dependencies: 181
-- Name: Operations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Operations_id_seq" OWNED BY "Operations".id;


--
-- TOC entry 184 (class 1259 OID 23272)
-- Name: Rates; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Rates" (
    id integer NOT NULL,
    date timestamp with time zone,
    value numeric(10,4),
    nominal numeric(10,4),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "currencyId" character varying(6)
);


--
-- TOC entry 183 (class 1259 OID 23270)
-- Name: Rates_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Rates_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2078 (class 0 OID 0)
-- Dependencies: 183
-- Name: Rates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Rates_id_seq" OWNED BY "Rates".id;


--
-- TOC entry 173 (class 1259 OID 23192)
-- Name: Subjects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Subjects" (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    "INN" character varying(12),
    "KPP" character varying(9),
    type character varying(30),
    "isSystem" boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- TOC entry 172 (class 1259 OID 23190)
-- Name: Subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Subjects_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2079 (class 0 OID 0)
-- Dependencies: 172
-- Name: Subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Subjects_id_seq" OWNED BY "Subjects".id;


--
-- TOC entry 178 (class 1259 OID 23224)
-- Name: Users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Users" (
    id integer NOT NULL,
    login character varying(255),
    password character varying(255),
    "firstName" character varying(255),
    "lastName" character varying(255),
    phone character varying(255),
    settings jsonb,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- TOC entry 177 (class 1259 OID 23222)
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "Users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2080 (class 0 OID 0)
-- Dependencies: 177
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "Users_id_seq" OWNED BY "Users".id;


--
-- TOC entry 1919 (class 2604 OID 23206)
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Accounts" ALTER COLUMN id SET DEFAULT nextval('"Accounts_id_seq"'::regclass);


--
-- TOC entry 1921 (class 2604 OID 23238)
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Favorites" ALTER COLUMN id SET DEFAULT nextval('"Favorites_id_seq"'::regclass);


--
-- TOC entry 1923 (class 2604 OID 23257)
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Operations" ALTER COLUMN id SET DEFAULT nextval('"Operations_id_seq"'::regclass);


--
-- TOC entry 1924 (class 2604 OID 23275)
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Rates" ALTER COLUMN id SET DEFAULT nextval('"Rates_id_seq"'::regclass);


--
-- TOC entry 1918 (class 2604 OID 23195)
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Subjects" ALTER COLUMN id SET DEFAULT nextval('"Subjects_id_seq"'::regclass);


--
-- TOC entry 1920 (class 2604 OID 23227)
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Users" ALTER COLUMN id SET DEFAULT nextval('"Users_id_seq"'::regclass);


--
-- TOC entry 2058 (class 0 OID 23203)
-- Dependencies: 175
-- Data for Name: Accounts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "Accounts" (id, name, description, ammount, currency, "createdAt", "updatedAt", "SubjectId") FROM stdin;
\.


--
-- TOC entry 2081 (class 0 OID 0)
-- Dependencies: 174
-- Name: Accounts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Accounts_id_seq"', 1, false);


--
-- TOC entry 2059 (class 0 OID 23217)
-- Dependencies: 176
-- Data for Name: Currencies; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "Currencies" (id, name, nominal, "createdAt", "updatedAt") FROM stdin;
R01235	Доллар США	1	2015-12-13 15:38:07+03	2015-12-13 15:38:09+03
R01239	Евро	1	2015-12-13 15:38:38+03	2015-12-13 15:38:39+03
\.


--
-- TOC entry 2063 (class 0 OID 23235)
-- Dependencies: 180
-- Data for Name: Favorites; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "Favorites" (id, "order", "createdAt", "updatedAt", "SubjectId", "UserId") FROM stdin;
\.


--
-- TOC entry 2082 (class 0 OID 0)
-- Dependencies: 179
-- Name: Favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Favorites_id_seq"', 38, true);


--
-- TOC entry 2065 (class 0 OID 23254)
-- Dependencies: 182
-- Data for Name: Operations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "Operations" (id, date, type, "orderNumber", tax, paid, "mustPay", given, "createdAt", "updatedAt", "fromAccountId", "toAccountId") FROM stdin;
\.


--
-- TOC entry 2083 (class 0 OID 0)
-- Dependencies: 181
-- Name: Operations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Operations_id_seq"', 1, false);


--
-- TOC entry 2067 (class 0 OID 23272)
-- Dependencies: 184
-- Data for Name: Rates; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "Rates" (id, date, value, nominal, "createdAt", "updatedAt", "currencyId") FROM stdin;
21	2015-12-11 00:00:00+03	69.2151	1.0000	2015-12-13 23:17:57.782+03	2015-12-13 23:17:57.782+03	R01235
22	2015-12-12 00:00:00+03	69.1755	1.0000	2015-12-13 23:17:57.792+03	2015-12-13 23:17:57.792+03	R01235
23	2015-12-11 00:00:00+03	76.0674	1.0000	2015-12-13 23:17:57.825+03	2015-12-13 23:17:57.825+03	R01239
24	2015-12-12 00:00:00+03	75.7472	1.0000	2015-12-13 23:17:57.829+03	2015-12-13 23:17:57.829+03	R01239
29	2015-12-15 00:00:00+03	70.2244	1.0000	2015-12-15 22:32:25.242+03	2015-12-15 22:32:25.242+03	R01235
30	2015-12-15 00:00:00+03	76.9659	1.0000	2015-12-15 22:32:25.28+03	2015-12-15 22:32:25.28+03	R01239
\.


--
-- TOC entry 2084 (class 0 OID 0)
-- Dependencies: 183
-- Name: Rates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Rates_id_seq"', 30, true);


--
-- TOC entry 2056 (class 0 OID 23192)
-- Dependencies: 173
-- Data for Name: Subjects; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "Subjects" (id, name, description, "INN", "KPP", type, "isSystem", "createdAt", "updatedAt") FROM stdin;
42	Frankie	Cupidatat non ullamco quis esse.	2116034657	58958609	ИП	f	2015-12-08 22:59:36.748+03	2015-12-08 22:59:36.748+03
1	Lucille	Sit ut enim esse Lorem ea ex qui cillum eu dolor non laborum.	2177361034	90985863	ИП	t	2015-12-08 22:59:36.572+03	2015-12-08 22:59:36.572+03
2	Mckee	Ea veniam ut eu ad est sint occaecat consectetur ex consequat.	2361384589	18814508	Компания	f	2015-12-08 22:59:36.586+03	2015-12-08 22:59:36.586+03
3	Noreen	Labore labore magna commodo ipsum quis.	4476953469	90473666	Физ-лицо	t	2015-12-08 22:59:36.591+03	2015-12-08 22:59:36.591+03
4	Walter	Exercitation irure sit amet non cillum irure excepteur irure.	4709346883	90133103	Физ-лицо	f	2015-12-08 22:59:36.598+03	2015-12-08 22:59:36.598+03
5	Kelley	Velit adipisicing laborum Lorem voluptate exercitation laborum cillum nisi qui cupidatat esse commodo.	9275270868	50208767	ИП	t	2015-12-08 22:59:36.602+03	2015-12-08 22:59:36.602+03
6	Trujillo	Id cupidatat reprehenderit pariatur nostrud minim do mollit laborum id.	4742915911	83275490	Физ-лицо	t	2015-12-08 22:59:36.606+03	2015-12-08 22:59:36.606+03
7	Darlene	Magna nisi consequat laboris amet eiusmod dolore enim exercitation.	3053439198	12803576	Компания	t	2015-12-08 22:59:36.612+03	2015-12-08 22:59:36.612+03
8	Cardenas	Laboris nostrud magna labore deserunt esse veniam quis deserunt.	1160226044	96542286	Физ-лицо	f	2015-12-08 22:59:36.616+03	2015-12-08 22:59:36.616+03
9	Iris	Id mollit laborum ad nostrud irure quis.	6612963492	33551121	Физ-лицо	f	2015-12-08 22:59:36.621+03	2015-12-08 22:59:36.621+03
10	Miranda	Commodo est enim ea aliquip id cillum eu.	2196666837	55618304	Компания	t	2015-12-08 22:59:36.625+03	2015-12-08 22:59:36.625+03
11	Pruitt	Minim est sint pariatur nulla excepteur incididunt do cupidatat incididunt voluptate consectetur Lorem in duis.	7898928896	91486336	Физ-лицо	f	2015-12-08 22:59:36.63+03	2015-12-08 22:59:36.63+03
12	Vickie	Consequat tempor nulla adipisicing dolor ex non eiusmod velit nisi.	8957674107	71067795	Физ-лицо	f	2015-12-08 22:59:36.637+03	2015-12-08 22:59:36.637+03
13	Rosario	Culpa esse ea proident sit adipisicing enim proident qui elit nulla anim voluptate.	5365307499	74996199	Физ-лицо	t	2015-12-08 22:59:36.642+03	2015-12-08 22:59:36.642+03
14	Rachael	Mollit laborum nulla pariatur est aliquip ea elit in minim et amet.	8851847647	14150763	Физ-лицо	f	2015-12-08 22:59:36.646+03	2015-12-08 22:59:36.646+03
15	Tracie	Ex veniam qui pariatur dolor mollit cillum.	1769628817	62970494	ИП	t	2015-12-08 22:59:36.65+03	2015-12-08 22:59:36.65+03
16	Banks	Dolore et magna officia ut anim irure pariatur.	7308471075	22973025	Компания	t	2015-12-08 22:59:36.654+03	2015-12-08 22:59:36.654+03
17	Nellie	Laboris laboris velit labore sint veniam cillum amet voluptate ut exercitation nisi commodo.	8910185905	40064544	Компания	t	2015-12-08 22:59:36.657+03	2015-12-08 22:59:36.657+03
18	Cox	Laboris deserunt ullamco irure sint velit Lorem et quis fugiat sit excepteur commodo do veniam.	5700107827	33841332	Физ-лицо	f	2015-12-08 22:59:36.667+03	2015-12-08 22:59:36.667+03
19	Bonita	Excepteur elit Lorem duis ea commodo dolor reprehenderit.	2573905596	68778214	Компания	f	2015-12-08 22:59:36.673+03	2015-12-08 22:59:36.673+03
20	Goodwin	Nulla aute ipsum amet aliquip labore incididunt est ad ullamco ea.	5513858284	53136889	Компания	t	2015-12-08 22:59:36.676+03	2015-12-08 22:59:36.676+03
21	Cunningham	Deserunt sunt esse labore deserunt elit do consequat.	1388200599	25080570	Физ-лицо	t	2015-12-08 22:59:36.679+03	2015-12-08 22:59:36.679+03
22	Ramsey	Sunt veniam aliquip aliquip do culpa consequat mollit duis ullamco aute.	8286329219	16288991	ИП	f	2015-12-08 22:59:36.683+03	2015-12-08 22:59:36.683+03
23	May	Consequat aliqua qui mollit irure occaecat reprehenderit cillum voluptate in consequat veniam.	4639442077	67884323	ИП	t	2015-12-08 22:59:36.686+03	2015-12-08 22:59:36.686+03
24	Abigail	Culpa nulla cillum qui exercitation amet dolore exercitation esse occaecat sit nulla.	3507412793	18186790	ИП	t	2015-12-08 22:59:36.688+03	2015-12-08 22:59:36.688+03
25	Bradshaw	Esse voluptate est cillum sit reprehenderit aute eiusmod enim do quis nisi voluptate quis.	7453280856	19656661	Компания	f	2015-12-08 22:59:36.691+03	2015-12-08 22:59:36.691+03
26	Hill	Ullamco consectetur consequat culpa velit cupidatat dolore minim voluptate ad.	2982070419	67484823	Физ-лицо	f	2015-12-08 22:59:36.694+03	2015-12-08 22:59:36.694+03
27	Amy	Velit id sint reprehenderit non sit eiusmod pariatur aliqua proident.	3459869687	36179690	Физ-лицо	t	2015-12-08 22:59:36.696+03	2015-12-08 22:59:36.696+03
28	Allison	Ut irure ullamco consequat quis commodo ad nisi cillum adipisicing dolore minim irure fugiat.	6098332887	71927928	Физ-лицо	t	2015-12-08 22:59:36.7+03	2015-12-08 22:59:36.7+03
29	Vivian	Mollit minim et reprehenderit commodo in consequat veniam elit reprehenderit aliquip consectetur Lorem tempor id.	8425111451	72727190	ИП	f	2015-12-08 22:59:36.704+03	2015-12-08 22:59:36.704+03
30	Aisha	Irure do velit pariatur dolor proident.	2173583979	60624518	Физ-лицо	t	2015-12-08 22:59:36.708+03	2015-12-08 22:59:36.708+03
31	Camacho	Occaecat dolor pariatur consectetur culpa exercitation.	7545519536	24589025	Компания	f	2015-12-08 22:59:36.711+03	2015-12-08 22:59:36.711+03
32	Robles	Esse anim ea pariatur esse.	6445235066	46986616	Компания	f	2015-12-08 22:59:36.72+03	2015-12-08 22:59:36.72+03
33	Vera	Culpa eiusmod nisi tempor dolor consectetur laborum ad.	1202592827	61326575	ИП	f	2015-12-08 22:59:36.724+03	2015-12-08 22:59:36.724+03
34	Keller	Sint enim est aute exercitation dolor nisi id duis.	6121587991	34366100	ИП	t	2015-12-08 22:59:36.726+03	2015-12-08 22:59:36.726+03
35	Hillary	Laborum occaecat occaecat est sint ut duis deserunt nisi laborum aliquip quis aliquip labore amet.	6073841819	11564301	Физ-лицо	t	2015-12-08 22:59:36.73+03	2015-12-08 22:59:36.73+03
36	Silvia	Ea dolore dolore magna id ullamco consectetur consequat officia irure ipsum do excepteur amet ex.	8473699988	12975910	ИП	f	2015-12-08 22:59:36.733+03	2015-12-08 22:59:36.733+03
37	Lana	Ea officia dolore elit incididunt fugiat consequat tempor cupidatat nulla Lorem id.	1524848507	63370371	ИП	f	2015-12-08 22:59:36.736+03	2015-12-08 22:59:36.736+03
38	Waters	Nulla ea cillum et aliquip ad pariatur exercitation quis consectetur duis.	5889558266	84235494	ИП	t	2015-12-08 22:59:36.739+03	2015-12-08 22:59:36.739+03
39	Alison	Minim culpa consequat Lorem deserunt.	6503333653	50468033	Физ-лицо	f	2015-12-08 22:59:36.741+03	2015-12-08 22:59:36.741+03
40	Lesa	In id ea sint commodo nisi pariatur ipsum aliquip sit.	7913434809	93869307	Физ-лицо	f	2015-12-08 22:59:36.743+03	2015-12-08 22:59:36.743+03
41	Hale	Anim aute id exercitation ad tempor fugiat eiusmod proident nisi proident ut non.	9826413266	97058409	ИП	t	2015-12-08 22:59:36.745+03	2015-12-08 22:59:36.745+03
43	Murray	Quis non reprehenderit nisi labore et proident eiusmod non et enim eu elit eu.	9672295736	89360250	Физ-лицо	f	2015-12-08 22:59:36.752+03	2015-12-08 22:59:36.752+03
44	Janie	Magna in elit labore quis eiusmod.	7623616104	67120389	Физ-лицо	f	2015-12-08 22:59:36.756+03	2015-12-08 22:59:36.756+03
45	Townsend	Lorem eiusmod duis nostrud adipisicing et.	3741844887	76849046	Физ-лицо	f	2015-12-08 22:59:36.761+03	2015-12-08 22:59:36.761+03
46	Lizzie	Magna ut ex nulla enim sit magna laborum amet nisi.	3306338658	24306510	Компания	f	2015-12-08 22:59:36.763+03	2015-12-08 22:59:36.763+03
47	Irma	Esse consectetur ipsum eu eu amet eiusmod non id commodo exercitation laboris aliqua velit irure.	2464111840	35179482	Физ-лицо	f	2015-12-08 22:59:36.765+03	2015-12-08 22:59:36.765+03
48	Staci	Duis et non aute mollit.	5075763830	38069865	Компания	t	2015-12-08 22:59:36.768+03	2015-12-08 22:59:36.768+03
102	фывфыв	фы	фыв	фыв	Компания	f	2015-12-12 00:24:14.492+03	2015-12-12 00:24:14.492+03
49	Latisha	Aute eiusmod aliquip officia ullamco velit tempor.	1420701592	57220656	Физ-лицо	t	2015-12-08 22:59:36.77+03	2015-12-08 22:59:36.77+03
50	Holcomb	Nulla sunt ex reprehenderit do nostrud eu.	7811667734	52364348	ИП	f	2015-12-08 22:59:36.773+03	2015-12-08 22:59:36.773+03
100	Freeman	Anim in nulla aute esse in do.	8140290899	28516915	Компания	f	2015-12-08 22:59:36.936+03	2015-12-08 22:59:36.936+03
51	Matthews	Exercitation ex aliquip quis quis amet et aute velit ea pariatur cillum do sit.	7400003746	63108344	ИП	t	2015-12-08 22:59:36.776+03	2015-12-08 22:59:36.776+03
52	Mclaughlin	Excepteur ut ex eu ea dolore proident duis mollit ipsum duis deserunt occaecat dolore.	6882573112	86933937	ИП	t	2015-12-08 22:59:36.78+03	2015-12-08 22:59:36.78+03
53	Shawna	Lorem sunt tempor voluptate do.	7071593351	62096122	Физ-лицо	t	2015-12-08 22:59:36.783+03	2015-12-08 22:59:36.783+03
54	Nieves	Duis cillum aute ex aliquip incididunt culpa nulla.	1462633035	22771490	Физ-лицо	t	2015-12-08 22:59:36.787+03	2015-12-08 22:59:36.787+03
55	Luna	Sit sunt dolor deserunt exercitation do amet commodo dolore ipsum cupidatat ea mollit.	3275823903	32962553	Физ-лицо	f	2015-12-08 22:59:36.791+03	2015-12-08 22:59:36.791+03
56	Tricia	Tempor irure culpa sint labore laborum do dolor cupidatat aliquip.	4742681863	34477234	ИП	t	2015-12-08 22:59:36.793+03	2015-12-08 22:59:36.793+03
57	Vance	Eiusmod nisi deserunt eiusmod deserunt sint.	5756487946	57213704	Физ-лицо	t	2015-12-08 22:59:36.797+03	2015-12-08 22:59:36.797+03
58	Janna	Ex pariatur elit eiusmod adipisicing Lorem cupidatat in enim.	1296594452	56945192	ИП	f	2015-12-08 22:59:36.801+03	2015-12-08 22:59:36.801+03
59	Kasey	Amet ex excepteur esse exercitation consectetur ullamco id ullamco reprehenderit non esse mollit exercitation incididunt.	9487291197	27843750	Физ-лицо	f	2015-12-08 22:59:36.807+03	2015-12-08 22:59:36.807+03
60	Julianne	Aliquip eiusmod veniam qui mollit sint ex amet sunt enim sunt mollit officia dolor qui.	7400345661	84150818	Компания	f	2015-12-08 22:59:36.812+03	2015-12-08 22:59:36.812+03
61	Nicholson	Do fugiat aliquip culpa exercitation tempor consequat excepteur culpa exercitation cupidatat magna consequat consectetur proident.	6000462127	54003810	ИП	f	2015-12-08 22:59:36.814+03	2015-12-08 22:59:36.814+03
62	Love	Tempor eiusmod ea laboris eiusmod exercitation occaecat ea magna eiusmod nisi sint minim.	6689232969	90330130	Физ-лицо	f	2015-12-08 22:59:36.818+03	2015-12-08 22:59:36.818+03
63	Robin	Sit commodo consequat enim reprehenderit esse adipisicing nostrud dolore dolor ea enim laboris nulla.	4640987491	21741088	Физ-лицо	t	2015-12-08 22:59:36.82+03	2015-12-08 22:59:36.82+03
64	Audrey	Elit sunt id aliqua non.	7412031509	66853819	Физ-лицо	t	2015-12-08 22:59:36.824+03	2015-12-08 22:59:36.824+03
65	Morton	In sit Lorem occaecat laboris officia ex dolor voluptate voluptate cupidatat.	9995635281	53001088	ИП	f	2015-12-08 22:59:36.827+03	2015-12-08 22:59:36.827+03
66	Rivera	Cupidatat duis cupidatat tempor amet enim amet.	8073607451	24805250	ИП	t	2015-12-08 22:59:36.833+03	2015-12-08 22:59:36.833+03
67	Gwen	Labore veniam deserunt in Lorem.	5033903413	77328928	ИП	t	2015-12-08 22:59:36.841+03	2015-12-08 22:59:36.841+03
68	Josephine	Velit sunt sit deserunt laboris excepteur quis nulla excepteur tempor id.	6669067933	93578890	ИП	t	2015-12-08 22:59:36.845+03	2015-12-08 22:59:36.845+03
69	Dunn	In amet elit nostrud nisi aliquip voluptate adipisicing eiusmod proident deserunt ut consequat aliquip dolore.	6457158811	34115740	Компания	f	2015-12-08 22:59:36.847+03	2015-12-08 22:59:36.847+03
70	Taylor	Irure id elit officia irure irure enim Lorem fugiat tempor eiusmod quis.	1821262261	13652672	Компания	t	2015-12-08 22:59:36.849+03	2015-12-08 22:59:36.849+03
71	Gonzalez	Excepteur consectetur adipisicing cupidatat aliquip excepteur fugiat et commodo do sunt nisi esse consequat reprehenderit.	8479820102	41191248	Физ-лицо	t	2015-12-08 22:59:36.853+03	2015-12-08 22:59:36.853+03
72	Wallace	Eiusmod nostrud ut reprehenderit eu ex reprehenderit adipisicing cupidatat.	2559448166	83865529	Физ-лицо	f	2015-12-08 22:59:36.856+03	2015-12-08 22:59:36.856+03
73	Cannon	Ex esse cupidatat eiusmod id excepteur nostrud et et dolore ex exercitation sint ullamco ut.	7551074427	56888709	Физ-лицо	f	2015-12-08 22:59:36.858+03	2015-12-08 22:59:36.858+03
74	Eleanor	Elit id proident ipsum minim nisi ad do.	2078863400	82895037	Физ-лицо	f	2015-12-08 22:59:36.861+03	2015-12-08 22:59:36.861+03
75	Robertson	Dolor in aliquip elit velit aliqua.	3876672485	56735366	ИП	t	2015-12-08 22:59:36.864+03	2015-12-08 22:59:36.864+03
76	Lily	Officia mollit consectetur pariatur adipisicing ut ex anim culpa mollit culpa.	8544419570	47889528	ИП	t	2015-12-08 22:59:36.868+03	2015-12-08 22:59:36.868+03
77	Bartlett	Velit sit ex ut id veniam quis in consequat deserunt voluptate quis consequat.	2007757224	23499662	Физ-лицо	f	2015-12-08 22:59:36.87+03	2015-12-08 22:59:36.87+03
78	Jerry	Sint Lorem culpa reprehenderit sit Lorem commodo laboris tempor.	6217722637	46957491	Компания	t	2015-12-08 22:59:36.872+03	2015-12-08 22:59:36.872+03
79	Campos	Laborum voluptate et aliquip enim elit incididunt irure Lorem.	7627293897	11558522	Физ-лицо	f	2015-12-08 22:59:36.875+03	2015-12-08 22:59:36.875+03
80	Puckett	Anim sit qui id in fugiat veniam quis incididunt.	9758890290	82660663	Физ-лицо	f	2015-12-08 22:59:36.878+03	2015-12-08 22:59:36.878+03
81	Wiggins	Est officia id eu est laborum incididunt elit magna non et.	2658612531	97973433	Компания	f	2015-12-08 22:59:36.881+03	2015-12-08 22:59:36.881+03
82	Beverley	Quis ut officia veniam cillum elit labore ex nostrud veniam.	4541336731	94239581	Компания	f	2015-12-08 22:59:36.883+03	2015-12-08 22:59:36.883+03
83	Mays	Occaecat anim ad id ullamco officia laboris consectetur aliquip dolore exercitation id laboris aute.	2141507628	46322486	Компания	f	2015-12-08 22:59:36.886+03	2015-12-08 22:59:36.886+03
84	Lilian	In eu officia cupidatat proident officia consectetur labore occaecat irure quis non eu enim anim.	8972590416	53661455	Компания	t	2015-12-08 22:59:36.888+03	2015-12-08 22:59:36.888+03
85	Justine	Consequat laborum fugiat cupidatat sint labore veniam.	2367371061	90590673	Физ-лицо	t	2015-12-08 22:59:36.89+03	2015-12-08 22:59:36.89+03
86	Carolina	Nisi non fugiat excepteur adipisicing sunt do fugiat reprehenderit qui mollit amet.	7910884145	44442066	ИП	f	2015-12-08 22:59:36.893+03	2015-12-08 22:59:36.893+03
87	Mayer	Mollit cupidatat fugiat commodo elit nulla eu minim incididunt laborum reprehenderit.	8520018098	41362158	Физ-лицо	f	2015-12-08 22:59:36.895+03	2015-12-08 22:59:36.895+03
88	Adrian	Commodo nisi nostrud enim sint nostrud laboris nulla qui nostrud eiusmod et aliqua occaecat ea.	9325881596	96239770	Компания	t	2015-12-08 22:59:36.897+03	2015-12-08 22:59:36.897+03
89	Cooke	Do ad irure ut amet anim qui exercitation.	7236780020	79025058	Компания	f	2015-12-08 22:59:36.9+03	2015-12-08 22:59:36.9+03
90	Jenkins	Sit ut cupidatat irure amet.	2631796880	50237335	Компания	f	2015-12-08 22:59:36.904+03	2015-12-08 22:59:36.904+03
91	Aurelia	Laborum velit proident labore fugiat amet aliquip nostrud sint deserunt reprehenderit nisi.	9491400557	20685951	ИП	t	2015-12-08 22:59:36.906+03	2015-12-08 22:59:36.906+03
92	Michael	Ipsum nostrud laborum id laborum proident quis velit non Lorem consequat.	3821211934	91997560	ИП	f	2015-12-08 22:59:36.909+03	2015-12-08 22:59:36.909+03
93	Josie	Est commodo anim quis non laborum nostrud veniam sint.	4591857851	87745748	Компания	f	2015-12-08 22:59:36.911+03	2015-12-08 22:59:36.911+03
94	Lyons	In nisi veniam proident excepteur cupidatat in anim ex duis voluptate aliqua.	7891194707	55176022	Компания	f	2015-12-08 22:59:36.913+03	2015-12-08 22:59:36.913+03
95	Guthrie	Officia esse ut consequat ipsum voluptate adipisicing ullamco deserunt duis fugiat commodo tempor.	4869820025	54248266	Компания	f	2015-12-08 22:59:36.916+03	2015-12-08 22:59:36.916+03
96	Maureen	Ad eiusmod ea ad laborum aute quis eu laboris proident ad ex.	1251910778	15853867	Компания	t	2015-12-08 22:59:36.919+03	2015-12-08 22:59:36.919+03
97	Thompson	Anim proident minim eiusmod nisi elit anim exercitation.	6884653041	95764218	Физ-лицо	f	2015-12-08 22:59:36.926+03	2015-12-08 22:59:36.926+03
98	Maryann	Veniam veniam do cillum commodo fugiat cillum nisi anim ex eu.	4558765035	58694065	ИП	t	2015-12-08 22:59:36.929+03	2015-12-08 22:59:36.929+03
99	Gabrielle	Aliqua ex nulla aute amet pariatur.	8132832130	30835658	ИП	f	2015-12-08 22:59:36.932+03	2015-12-08 22:59:36.932+03
103	фывфыв	фы	фыв	фыв	Компания	t	2015-12-12 00:24:22.808+03	2015-12-12 00:24:22.808+03
104	фывфыв	фы	фыв	фыв	Компания	t	2015-12-12 00:24:56+03	2015-12-12 00:24:56+03
105	asdf	adsfasdf	asdf	asdf	Компания	f	2015-12-15 22:53:46.729+03	2015-12-15 22:53:46.729+03
\.


--
-- TOC entry 2085 (class 0 OID 0)
-- Dependencies: 172
-- Name: Subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Subjects_id_seq"', 105, true);


--
-- TOC entry 2061 (class 0 OID 23224)
-- Dependencies: 178
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "Users" (id, login, password, "firstName", "lastName", phone, settings, "createdAt", "updatedAt") FROM stdin;
1	user	00700b7885f95361590e8dd4a6bd53b567a37f98	User	User	asdasd	{"favs": [], "expand": ["search", "list"]}	2015-12-10 23:47:26.715+03	2015-12-19 21:20:06.444+03
\.


--
-- TOC entry 2086 (class 0 OID 0)
-- Dependencies: 177
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"Users_id_seq"', 1, true);


--
-- TOC entry 1928 (class 2606 OID 23211)
-- Name: Accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Accounts"
    ADD CONSTRAINT "Accounts_pkey" PRIMARY KEY (id);


--
-- TOC entry 1930 (class 2606 OID 23221)
-- Name: Currencies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Currencies"
    ADD CONSTRAINT "Currencies_pkey" PRIMARY KEY (id);


--
-- TOC entry 1934 (class 2606 OID 23241)
-- Name: Favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Favorites"
    ADD CONSTRAINT "Favorites_pkey" PRIMARY KEY (id);


--
-- TOC entry 1936 (class 2606 OID 23259)
-- Name: Operations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Operations"
    ADD CONSTRAINT "Operations_pkey" PRIMARY KEY (id);


--
-- TOC entry 1938 (class 2606 OID 23277)
-- Name: Rates_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Rates"
    ADD CONSTRAINT "Rates_pkey" PRIMARY KEY (id);


--
-- TOC entry 1926 (class 2606 OID 23200)
-- Name: Subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Subjects"
    ADD CONSTRAINT "Subjects_pkey" PRIMARY KEY (id);


--
-- TOC entry 1932 (class 2606 OID 23232)
-- Name: Users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- TOC entry 1939 (class 1259 OID 23283)
-- Name: rates_date_currency_id; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX rates_date_currency_id ON "Rates" USING btree (date, "currencyId");


--
-- TOC entry 1940 (class 2606 OID 23212)
-- Name: Accounts_SubjectId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Accounts"
    ADD CONSTRAINT "Accounts_SubjectId_fkey" FOREIGN KEY ("SubjectId") REFERENCES "Subjects"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 1941 (class 2606 OID 23242)
-- Name: Favorites_SubjectId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Favorites"
    ADD CONSTRAINT "Favorites_SubjectId_fkey" FOREIGN KEY ("SubjectId") REFERENCES "Subjects"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 1942 (class 2606 OID 23247)
-- Name: Favorites_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Favorites"
    ADD CONSTRAINT "Favorites_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 1943 (class 2606 OID 23260)
-- Name: Operations_fromAccountId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Operations"
    ADD CONSTRAINT "Operations_fromAccountId_fkey" FOREIGN KEY ("fromAccountId") REFERENCES "Accounts"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 1944 (class 2606 OID 23265)
-- Name: Operations_toAccountId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Operations"
    ADD CONSTRAINT "Operations_toAccountId_fkey" FOREIGN KEY ("toAccountId") REFERENCES "Accounts"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 1945 (class 2606 OID 23278)
-- Name: Rates_currencyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "Rates"
    ADD CONSTRAINT "Rates_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currencies"(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2015-12-19 21:25:42

--
-- PostgreSQL database dump complete
--

