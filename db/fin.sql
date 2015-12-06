--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: AccountTypes; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE "AccountTypes" (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "AccountTypes" OWNER TO postgres;

--
-- Name: AccountTypes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "AccountTypes_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "AccountTypes_id_seq" OWNER TO postgres;

--
-- Name: AccountTypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "AccountTypes_id_seq" OWNED BY "AccountTypes".id;


--
-- Name: Accounts; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE "Accounts" (
    id integer NOT NULL,
    name character varying(256),
    description character varying(512),
    ammount numeric,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "AccountTypeId" integer,
    "CurrencyId" integer,
    "SubjectId" integer
);


ALTER TABLE "Accounts" OWNER TO postgres;

--
-- Name: Accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Accounts_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Accounts_id_seq" OWNER TO postgres;

--
-- Name: Accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Accounts_id_seq" OWNED BY "Accounts".id;


--
-- Name: Currencies; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE "Currencies" (
    id integer NOT NULL,
    name character varying(256),
    "exchangeRate" numeric,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Currencies" OWNER TO postgres;

--
-- Name: Currencies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Currencies_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Currencies_id_seq" OWNER TO postgres;

--
-- Name: Currencies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Currencies_id_seq" OWNED BY "Currencies".id;


--
-- Name: OperationTypes; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE "OperationTypes" (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "OperationTypes" OWNER TO postgres;

--
-- Name: OperationTypes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "OperationTypes_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "OperationTypes_id_seq" OWNER TO postgres;

--
-- Name: OperationTypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "OperationTypes_id_seq" OWNED BY "OperationTypes".id;


--
-- Name: Operations; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE "Operations" (
    id integer NOT NULL,
    "ammountFrom" numeric,
    "ammountTo" numeric,
    tax numeric,
    "exchangeRate" numeric,
    description character varying(512),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "OperationTypeId" integer,
    "fromAccountId" integer,
    "toAccountId" integer
);


ALTER TABLE "Operations" OWNER TO postgres;

--
-- Name: Operations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Operations_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Operations_id_seq" OWNER TO postgres;

--
-- Name: Operations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Operations_id_seq" OWNED BY "Operations".id;


--
-- Name: SubjectTypes; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE "SubjectTypes" (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "SubjectTypes" OWNER TO postgres;

--
-- Name: SubjectTypes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "SubjectTypes_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "SubjectTypes_id_seq" OWNER TO postgres;

--
-- Name: SubjectTypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "SubjectTypes_id_seq" OWNED BY "SubjectTypes".id;


--
-- Name: Subjects; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE "Subjects" (
    id integer NOT NULL,
    login character varying(255),
    password character varying(255),
    name character varying(255),
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "SubjectTypeId" integer,
    "ownerId" integer
);


ALTER TABLE "Subjects" OWNER TO postgres;

--
-- Name: Subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Subjects_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Subjects_id_seq" OWNER TO postgres;

--
-- Name: Subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Subjects_id_seq" OWNED BY "Subjects".id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "AccountTypes" ALTER COLUMN id SET DEFAULT nextval('"AccountTypes_id_seq"'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Accounts" ALTER COLUMN id SET DEFAULT nextval('"Accounts_id_seq"'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Currencies" ALTER COLUMN id SET DEFAULT nextval('"Currencies_id_seq"'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "OperationTypes" ALTER COLUMN id SET DEFAULT nextval('"OperationTypes_id_seq"'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Operations" ALTER COLUMN id SET DEFAULT nextval('"Operations_id_seq"'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "SubjectTypes" ALTER COLUMN id SET DEFAULT nextval('"SubjectTypes_id_seq"'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Subjects" ALTER COLUMN id SET DEFAULT nextval('"Subjects_id_seq"'::regclass);


--
-- Data for Name: AccountTypes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "AccountTypes" (id, name, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: AccountTypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"AccountTypes_id_seq"', 1, false);


--
-- Data for Name: Accounts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Accounts" (id, name, description, ammount, "createdAt", "updatedAt", "AccountTypeId", "CurrencyId", "SubjectId") FROM stdin;
\.


--
-- Name: Accounts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Accounts_id_seq"', 1, false);


--
-- Data for Name: Currencies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Currencies" (id, name, "exchangeRate", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: Currencies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Currencies_id_seq"', 1, false);


--
-- Data for Name: OperationTypes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "OperationTypes" (id, name, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: OperationTypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"OperationTypes_id_seq"', 1, false);


--
-- Data for Name: Operations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Operations" (id, "ammountFrom", "ammountTo", tax, "exchangeRate", description, "createdAt", "updatedAt", "OperationTypeId", "fromAccountId", "toAccountId") FROM stdin;
\.


--
-- Name: Operations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Operations_id_seq"', 1, false);


--
-- Data for Name: SubjectTypes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "SubjectTypes" (id, name, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: SubjectTypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"SubjectTypes_id_seq"', 1, false);


--
-- Data for Name: Subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Subjects" (id, login, password, name, description, "createdAt", "updatedAt", "SubjectTypeId", "ownerId") FROM stdin;
1	user	00700b7885f95361590e8dd4a6bd53b567a37f98	\N	\N	2015-12-06 00:18:12.542+03	2015-12-06 12:51:41.052+03	\N	\N
3	lou	00700b7885f95361590e8dd4a6bd53b567a37f98	Lou Osborne	cillum sint velit reprehenderit id	2015-12-06 13:56:23.358+03	2015-12-06 13:56:23.358+03	\N	\N
4	santiago	00700b7885f95361590e8dd4a6bd53b567a37f98	Santiago Sheppard	aute nostrud cillum amet proident	2015-12-06 13:56:23.536+03	2015-12-06 13:56:23.536+03	\N	\N
7	viola	00700b7885f95361590e8dd4a6bd53b567a37f98	Viola Walls	enim officia velit est Lorem	2015-12-06 13:56:23.552+03	2015-12-06 13:56:23.552+03	\N	\N
6	bennett	00700b7885f95361590e8dd4a6bd53b567a37f98	Bennett Oneil	ipsum voluptate nostrud proident ea	2015-12-06 13:56:23.547+03	2015-12-06 13:56:23.547+03	\N	\N
5	wade	00700b7885f95361590e8dd4a6bd53b567a37f98	Wade Pittman	quis dolore pariatur amet eiusmod	2015-12-06 13:56:23.541+03	2015-12-06 13:56:23.541+03	\N	\N
9	lacy	00700b7885f95361590e8dd4a6bd53b567a37f98	Lacy Norris	anim laborum ullamco ea sit	2015-12-06 13:56:23.561+03	2015-12-06 13:56:23.561+03	\N	\N
11	lana	00700b7885f95361590e8dd4a6bd53b567a37f98	Lana Mercer	laborum sunt amet sunt non	2015-12-06 13:56:23.57+03	2015-12-06 13:56:23.57+03	\N	\N
12	cleo	00700b7885f95361590e8dd4a6bd53b567a37f98	Cleo Gilmore	elit deserunt officia pariatur eu	2015-12-06 13:56:23.574+03	2015-12-06 13:56:23.574+03	\N	\N
10	luisa	00700b7885f95361590e8dd4a6bd53b567a37f98	Luisa Benson	labore sunt sunt ad officia	2015-12-06 13:56:23.566+03	2015-12-06 13:56:23.566+03	\N	\N
8	schwartz	00700b7885f95361590e8dd4a6bd53b567a37f98	Schwartz Malone	officia deserunt occaecat in reprehenderit	2015-12-06 13:56:23.556+03	2015-12-06 13:56:23.556+03	\N	\N
\.


--
-- Name: Subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Subjects_id_seq"', 12, true);


--
-- Name: AccountTypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "AccountTypes"
    ADD CONSTRAINT "AccountTypes_pkey" PRIMARY KEY (id);


--
-- Name: Accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "Accounts"
    ADD CONSTRAINT "Accounts_pkey" PRIMARY KEY (id);


--
-- Name: Currencies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "Currencies"
    ADD CONSTRAINT "Currencies_pkey" PRIMARY KEY (id);


--
-- Name: OperationTypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "OperationTypes"
    ADD CONSTRAINT "OperationTypes_pkey" PRIMARY KEY (id);


--
-- Name: Operations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "Operations"
    ADD CONSTRAINT "Operations_pkey" PRIMARY KEY (id);


--
-- Name: SubjectTypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "SubjectTypes"
    ADD CONSTRAINT "SubjectTypes_pkey" PRIMARY KEY (id);


--
-- Name: Subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "Subjects"
    ADD CONSTRAINT "Subjects_pkey" PRIMARY KEY (id);


--
-- Name: Accounts_AccountTypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Accounts"
    ADD CONSTRAINT "Accounts_AccountTypeId_fkey" FOREIGN KEY ("AccountTypeId") REFERENCES "AccountTypes"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Accounts_CurrencyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Accounts"
    ADD CONSTRAINT "Accounts_CurrencyId_fkey" FOREIGN KEY ("CurrencyId") REFERENCES "Currencies"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Accounts_SubjectId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Accounts"
    ADD CONSTRAINT "Accounts_SubjectId_fkey" FOREIGN KEY ("SubjectId") REFERENCES "Subjects"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Operations_OperationTypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Operations"
    ADD CONSTRAINT "Operations_OperationTypeId_fkey" FOREIGN KEY ("OperationTypeId") REFERENCES "OperationTypes"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Operations_fromAccountId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Operations"
    ADD CONSTRAINT "Operations_fromAccountId_fkey" FOREIGN KEY ("fromAccountId") REFERENCES "Accounts"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Operations_toAccountId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Operations"
    ADD CONSTRAINT "Operations_toAccountId_fkey" FOREIGN KEY ("toAccountId") REFERENCES "Accounts"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Subjects_SubjectTypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Subjects"
    ADD CONSTRAINT "Subjects_SubjectTypeId_fkey" FOREIGN KEY ("SubjectTypeId") REFERENCES "SubjectTypes"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Subjects_ownerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Subjects"
    ADD CONSTRAINT "Subjects_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Subjects"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

