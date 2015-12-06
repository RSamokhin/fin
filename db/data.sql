--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = public, pg_catalog;

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
-- Data for Name: Currencies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Currencies" (id, name, "exchangeRate", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: SubjectTypes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "SubjectTypes" (id, name, "createdAt", "updatedAt") FROM stdin;
\.


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
-- Data for Name: Accounts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Accounts" (id, name, description, ammount, "createdAt", "updatedAt", "AccountTypeId", "CurrencyId", "SubjectId") FROM stdin;
\.


--
-- Name: Accounts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Accounts_id_seq"', 1, false);


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
-- Name: SubjectTypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"SubjectTypes_id_seq"', 1, false);


--
-- Name: Subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Subjects_id_seq"', 12, true);


--
-- PostgreSQL database dump complete
--

