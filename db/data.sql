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
-- Data for Name: Subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Subjects" (id, name, description, "INN", "KPP", type, "isSystem", "createdAt", "updatedAt") FROM stdin;
1	Lucille	Sit ut enim esse Lorem ea ex qui cillum eu dolor non laborum.	2177361034	9098586338	ИП	t	2015-12-08 22:59:36.572+03	2015-12-08 22:59:36.572+03
2	Mckee	Ea veniam ut eu ad est sint occaecat consectetur ex consequat.	2361384589	1881450886	Компания	f	2015-12-08 22:59:36.586+03	2015-12-08 22:59:36.586+03
3	Noreen	Labore labore magna commodo ipsum quis.	4476953469	9047366678	Физ-лицо	t	2015-12-08 22:59:36.591+03	2015-12-08 22:59:36.591+03
4	Walter	Exercitation irure sit amet non cillum irure excepteur irure.	4709346883	9013310385	Физ-лицо	f	2015-12-08 22:59:36.598+03	2015-12-08 22:59:36.598+03
5	Kelley	Velit adipisicing laborum Lorem voluptate exercitation laborum cillum nisi qui cupidatat esse commodo.	9275270868	5020876760	ИП	t	2015-12-08 22:59:36.602+03	2015-12-08 22:59:36.602+03
6	Trujillo	Id cupidatat reprehenderit pariatur nostrud minim do mollit laborum id.	4742915911	8327549055	Физ-лицо	t	2015-12-08 22:59:36.606+03	2015-12-08 22:59:36.606+03
7	Darlene	Magna nisi consequat laboris amet eiusmod dolore enim exercitation.	3053439198	1280357603	Компания	t	2015-12-08 22:59:36.612+03	2015-12-08 22:59:36.612+03
8	Cardenas	Laboris nostrud magna labore deserunt esse veniam quis deserunt.	1160226044	9654228682	Физ-лицо	f	2015-12-08 22:59:36.616+03	2015-12-08 22:59:36.616+03
9	Iris	Id mollit laborum ad nostrud irure quis.	6612963492	3355112116	Физ-лицо	f	2015-12-08 22:59:36.621+03	2015-12-08 22:59:36.621+03
10	Miranda	Commodo est enim ea aliquip id cillum eu.	2196666837	5561830456	Компания	t	2015-12-08 22:59:36.625+03	2015-12-08 22:59:36.625+03
11	Pruitt	Minim est sint pariatur nulla excepteur incididunt do cupidatat incididunt voluptate consectetur Lorem in duis.	7898928896	9148633639	Физ-лицо	f	2015-12-08 22:59:36.63+03	2015-12-08 22:59:36.63+03
12	Vickie	Consequat tempor nulla adipisicing dolor ex non eiusmod velit nisi.	8957674107	7106779586	Физ-лицо	f	2015-12-08 22:59:36.637+03	2015-12-08 22:59:36.637+03
13	Rosario	Culpa esse ea proident sit adipisicing enim proident qui elit nulla anim voluptate.	5365307499	7499619910	Физ-лицо	t	2015-12-08 22:59:36.642+03	2015-12-08 22:59:36.642+03
14	Rachael	Mollit laborum nulla pariatur est aliquip ea elit in minim et amet.	8851847647	1415076300	Физ-лицо	f	2015-12-08 22:59:36.646+03	2015-12-08 22:59:36.646+03
15	Tracie	Ex veniam qui pariatur dolor mollit cillum.	1769628817	6297049465	ИП	t	2015-12-08 22:59:36.65+03	2015-12-08 22:59:36.65+03
16	Banks	Dolore et magna officia ut anim irure pariatur.	7308471075	2297302575	Компания	t	2015-12-08 22:59:36.654+03	2015-12-08 22:59:36.654+03
17	Nellie	Laboris laboris velit labore sint veniam cillum amet voluptate ut exercitation nisi commodo.	8910185905	4006454464	Компания	t	2015-12-08 22:59:36.657+03	2015-12-08 22:59:36.657+03
18	Cox	Laboris deserunt ullamco irure sint velit Lorem et quis fugiat sit excepteur commodo do veniam.	5700107827	3384133295	Физ-лицо	f	2015-12-08 22:59:36.667+03	2015-12-08 22:59:36.667+03
19	Bonita	Excepteur elit Lorem duis ea commodo dolor reprehenderit.	2573905596	6877821488	Компания	f	2015-12-08 22:59:36.673+03	2015-12-08 22:59:36.673+03
20	Goodwin	Nulla aute ipsum amet aliquip labore incididunt est ad ullamco ea.	5513858284	5313688944	Компания	t	2015-12-08 22:59:36.676+03	2015-12-08 22:59:36.676+03
21	Cunningham	Deserunt sunt esse labore deserunt elit do consequat.	1388200599	2508057084	Физ-лицо	t	2015-12-08 22:59:36.679+03	2015-12-08 22:59:36.679+03
22	Ramsey	Sunt veniam aliquip aliquip do culpa consequat mollit duis ullamco aute.	8286329219	1628899140	ИП	f	2015-12-08 22:59:36.683+03	2015-12-08 22:59:36.683+03
23	May	Consequat aliqua qui mollit irure occaecat reprehenderit cillum voluptate in consequat veniam.	4639442077	6788432376	ИП	t	2015-12-08 22:59:36.686+03	2015-12-08 22:59:36.686+03
24	Abigail	Culpa nulla cillum qui exercitation amet dolore exercitation esse occaecat sit nulla.	3507412793	1818679006	ИП	t	2015-12-08 22:59:36.688+03	2015-12-08 22:59:36.688+03
25	Bradshaw	Esse voluptate est cillum sit reprehenderit aute eiusmod enim do quis nisi voluptate quis.	7453280856	1965666129	Компания	f	2015-12-08 22:59:36.691+03	2015-12-08 22:59:36.691+03
26	Hill	Ullamco consectetur consequat culpa velit cupidatat dolore minim voluptate ad.	2982070419	6748482360	Физ-лицо	f	2015-12-08 22:59:36.694+03	2015-12-08 22:59:36.694+03
27	Amy	Velit id sint reprehenderit non sit eiusmod pariatur aliqua proident.	3459869687	3617969015	Физ-лицо	t	2015-12-08 22:59:36.696+03	2015-12-08 22:59:36.696+03
28	Allison	Ut irure ullamco consequat quis commodo ad nisi cillum adipisicing dolore minim irure fugiat.	6098332887	7192792811	Физ-лицо	t	2015-12-08 22:59:36.7+03	2015-12-08 22:59:36.7+03
29	Vivian	Mollit minim et reprehenderit commodo in consequat veniam elit reprehenderit aliquip consectetur Lorem tempor id.	8425111451	7272719098	ИП	f	2015-12-08 22:59:36.704+03	2015-12-08 22:59:36.704+03
30	Aisha	Irure do velit pariatur dolor proident.	2173583979	6062451858	Физ-лицо	t	2015-12-08 22:59:36.708+03	2015-12-08 22:59:36.708+03
31	Camacho	Occaecat dolor pariatur consectetur culpa exercitation.	7545519536	2458902519	Компания	f	2015-12-08 22:59:36.711+03	2015-12-08 22:59:36.711+03
32	Robles	Esse anim ea pariatur esse.	6445235066	4698661654	Компания	f	2015-12-08 22:59:36.72+03	2015-12-08 22:59:36.72+03
33	Vera	Culpa eiusmod nisi tempor dolor consectetur laborum ad.	1202592827	6132657596	ИП	f	2015-12-08 22:59:36.724+03	2015-12-08 22:59:36.724+03
34	Keller	Sint enim est aute exercitation dolor nisi id duis.	6121587991	3436610010	ИП	t	2015-12-08 22:59:36.726+03	2015-12-08 22:59:36.726+03
35	Hillary	Laborum occaecat occaecat est sint ut duis deserunt nisi laborum aliquip quis aliquip labore amet.	6073841819	1156430165	Физ-лицо	t	2015-12-08 22:59:36.73+03	2015-12-08 22:59:36.73+03
36	Silvia	Ea dolore dolore magna id ullamco consectetur consequat officia irure ipsum do excepteur amet ex.	8473699988	1297591056	ИП	f	2015-12-08 22:59:36.733+03	2015-12-08 22:59:36.733+03
37	Lana	Ea officia dolore elit incididunt fugiat consequat tempor cupidatat nulla Lorem id.	1524848507	6337037143	ИП	f	2015-12-08 22:59:36.736+03	2015-12-08 22:59:36.736+03
38	Waters	Nulla ea cillum et aliquip ad pariatur exercitation quis consectetur duis.	5889558266	8423549408	ИП	t	2015-12-08 22:59:36.739+03	2015-12-08 22:59:36.739+03
39	Alison	Minim culpa consequat Lorem deserunt.	6503333653	5046803303	Физ-лицо	f	2015-12-08 22:59:36.741+03	2015-12-08 22:59:36.741+03
40	Lesa	In id ea sint commodo nisi pariatur ipsum aliquip sit.	7913434809	9386930737	Физ-лицо	f	2015-12-08 22:59:36.743+03	2015-12-08 22:59:36.743+03
41	Hale	Anim aute id exercitation ad tempor fugiat eiusmod proident nisi proident ut non.	9826413266	9705840961	ИП	t	2015-12-08 22:59:36.745+03	2015-12-08 22:59:36.745+03
42	Frankie	Cupidatat non ullamco quis esse.	2116034657	5895860969	ИП	f	2015-12-08 22:59:36.748+03	2015-12-08 22:59:36.748+03
43	Murray	Quis non reprehenderit nisi labore et proident eiusmod non et enim eu elit eu.	9672295736	8936025087	Физ-лицо	f	2015-12-08 22:59:36.752+03	2015-12-08 22:59:36.752+03
44	Janie	Magna in elit labore quis eiusmod.	7623616104	6712038912	Физ-лицо	f	2015-12-08 22:59:36.756+03	2015-12-08 22:59:36.756+03
45	Townsend	Lorem eiusmod duis nostrud adipisicing et.	3741844887	7684904685	Физ-лицо	f	2015-12-08 22:59:36.761+03	2015-12-08 22:59:36.761+03
46	Lizzie	Magna ut ex nulla enim sit magna laborum amet nisi.	3306338658	2430651008	Компания	f	2015-12-08 22:59:36.763+03	2015-12-08 22:59:36.763+03
47	Irma	Esse consectetur ipsum eu eu amet eiusmod non id commodo exercitation laboris aliqua velit irure.	2464111840	3517948294	Физ-лицо	f	2015-12-08 22:59:36.765+03	2015-12-08 22:59:36.765+03
48	Staci	Duis et non aute mollit.	5075763830	3806986593	Компания	t	2015-12-08 22:59:36.768+03	2015-12-08 22:59:36.768+03
49	Latisha	Aute eiusmod aliquip officia ullamco velit tempor.	1420701592	5722065637	Физ-лицо	t	2015-12-08 22:59:36.77+03	2015-12-08 22:59:36.77+03
50	Holcomb	Nulla sunt ex reprehenderit do nostrud eu.	7811667734	5236434866	ИП	f	2015-12-08 22:59:36.773+03	2015-12-08 22:59:36.773+03
51	Matthews	Exercitation ex aliquip quis quis amet et aute velit ea pariatur cillum do sit.	7400003746	6310834419	ИП	t	2015-12-08 22:59:36.776+03	2015-12-08 22:59:36.776+03
52	Mclaughlin	Excepteur ut ex eu ea dolore proident duis mollit ipsum duis deserunt occaecat dolore.	6882573112	8693393740	ИП	t	2015-12-08 22:59:36.78+03	2015-12-08 22:59:36.78+03
53	Shawna	Lorem sunt tempor voluptate do.	7071593351	6209612228	Физ-лицо	t	2015-12-08 22:59:36.783+03	2015-12-08 22:59:36.783+03
54	Nieves	Duis cillum aute ex aliquip incididunt culpa nulla.	1462633035	2277149060	Физ-лицо	t	2015-12-08 22:59:36.787+03	2015-12-08 22:59:36.787+03
55	Luna	Sit sunt dolor deserunt exercitation do amet commodo dolore ipsum cupidatat ea mollit.	3275823903	3296255312	Физ-лицо	f	2015-12-08 22:59:36.791+03	2015-12-08 22:59:36.791+03
56	Tricia	Tempor irure culpa sint labore laborum do dolor cupidatat aliquip.	4742681863	3447723482	ИП	t	2015-12-08 22:59:36.793+03	2015-12-08 22:59:36.793+03
57	Vance	Eiusmod nisi deserunt eiusmod deserunt sint.	5756487946	5721370446	Физ-лицо	t	2015-12-08 22:59:36.797+03	2015-12-08 22:59:36.797+03
58	Janna	Ex pariatur elit eiusmod adipisicing Lorem cupidatat in enim.	1296594452	5694519254	ИП	f	2015-12-08 22:59:36.801+03	2015-12-08 22:59:36.801+03
59	Kasey	Amet ex excepteur esse exercitation consectetur ullamco id ullamco reprehenderit non esse mollit exercitation incididunt.	9487291197	2784375046	Физ-лицо	f	2015-12-08 22:59:36.807+03	2015-12-08 22:59:36.807+03
60	Julianne	Aliquip eiusmod veniam qui mollit sint ex amet sunt enim sunt mollit officia dolor qui.	7400345661	8415081836	Компания	f	2015-12-08 22:59:36.812+03	2015-12-08 22:59:36.812+03
61	Nicholson	Do fugiat aliquip culpa exercitation tempor consequat excepteur culpa exercitation cupidatat magna consequat consectetur proident.	6000462127	5400381047	ИП	f	2015-12-08 22:59:36.814+03	2015-12-08 22:59:36.814+03
62	Love	Tempor eiusmod ea laboris eiusmod exercitation occaecat ea magna eiusmod nisi sint minim.	6689232969	9033013059	Физ-лицо	f	2015-12-08 22:59:36.818+03	2015-12-08 22:59:36.818+03
63	Robin	Sit commodo consequat enim reprehenderit esse adipisicing nostrud dolore dolor ea enim laboris nulla.	4640987491	2174108864	Физ-лицо	t	2015-12-08 22:59:36.82+03	2015-12-08 22:59:36.82+03
64	Audrey	Elit sunt id aliqua non.	7412031509	6685381962	Физ-лицо	t	2015-12-08 22:59:36.824+03	2015-12-08 22:59:36.824+03
65	Morton	In sit Lorem occaecat laboris officia ex dolor voluptate voluptate cupidatat.	9995635281	5300108804	ИП	f	2015-12-08 22:59:36.827+03	2015-12-08 22:59:36.827+03
66	Rivera	Cupidatat duis cupidatat tempor amet enim amet.	8073607451	2480525015	ИП	t	2015-12-08 22:59:36.833+03	2015-12-08 22:59:36.833+03
67	Gwen	Labore veniam deserunt in Lorem.	5033903413	7732892872	ИП	t	2015-12-08 22:59:36.841+03	2015-12-08 22:59:36.841+03
68	Josephine	Velit sunt sit deserunt laboris excepteur quis nulla excepteur tempor id.	6669067933	9357889000	ИП	t	2015-12-08 22:59:36.845+03	2015-12-08 22:59:36.845+03
69	Dunn	In amet elit nostrud nisi aliquip voluptate adipisicing eiusmod proident deserunt ut consequat aliquip dolore.	6457158811	3411574051	Компания	f	2015-12-08 22:59:36.847+03	2015-12-08 22:59:36.847+03
70	Taylor	Irure id elit officia irure irure enim Lorem fugiat tempor eiusmod quis.	1821262261	1365267284	Компания	t	2015-12-08 22:59:36.849+03	2015-12-08 22:59:36.849+03
71	Gonzalez	Excepteur consectetur adipisicing cupidatat aliquip excepteur fugiat et commodo do sunt nisi esse consequat reprehenderit.	8479820102	4119124853	Физ-лицо	t	2015-12-08 22:59:36.853+03	2015-12-08 22:59:36.853+03
72	Wallace	Eiusmod nostrud ut reprehenderit eu ex reprehenderit adipisicing cupidatat.	2559448166	8386552953	Физ-лицо	f	2015-12-08 22:59:36.856+03	2015-12-08 22:59:36.856+03
73	Cannon	Ex esse cupidatat eiusmod id excepteur nostrud et et dolore ex exercitation sint ullamco ut.	7551074427	5688870911	Физ-лицо	f	2015-12-08 22:59:36.858+03	2015-12-08 22:59:36.858+03
74	Eleanor	Elit id proident ipsum minim nisi ad do.	2078863400	8289503710	Физ-лицо	f	2015-12-08 22:59:36.861+03	2015-12-08 22:59:36.861+03
75	Robertson	Dolor in aliquip elit velit aliqua.	3876672485	5673536689	ИП	t	2015-12-08 22:59:36.864+03	2015-12-08 22:59:36.864+03
76	Lily	Officia mollit consectetur pariatur adipisicing ut ex anim culpa mollit culpa.	8544419570	4788952886	ИП	t	2015-12-08 22:59:36.868+03	2015-12-08 22:59:36.868+03
77	Bartlett	Velit sit ex ut id veniam quis in consequat deserunt voluptate quis consequat.	2007757224	2349966297	Физ-лицо	f	2015-12-08 22:59:36.87+03	2015-12-08 22:59:36.87+03
78	Jerry	Sint Lorem culpa reprehenderit sit Lorem commodo laboris tempor.	6217722637	4695749155	Компания	t	2015-12-08 22:59:36.872+03	2015-12-08 22:59:36.872+03
79	Campos	Laborum voluptate et aliquip enim elit incididunt irure Lorem.	7627293897	1155852284	Физ-лицо	f	2015-12-08 22:59:36.875+03	2015-12-08 22:59:36.875+03
80	Puckett	Anim sit qui id in fugiat veniam quis incididunt.	9758890290	8266066335	Физ-лицо	f	2015-12-08 22:59:36.878+03	2015-12-08 22:59:36.878+03
81	Wiggins	Est officia id eu est laborum incididunt elit magna non et.	2658612531	9797343319	Компания	f	2015-12-08 22:59:36.881+03	2015-12-08 22:59:36.881+03
82	Beverley	Quis ut officia veniam cillum elit labore ex nostrud veniam.	4541336731	9423958161	Компания	f	2015-12-08 22:59:36.883+03	2015-12-08 22:59:36.883+03
83	Mays	Occaecat anim ad id ullamco officia laboris consectetur aliquip dolore exercitation id laboris aute.	2141507628	4632248694	Компания	f	2015-12-08 22:59:36.886+03	2015-12-08 22:59:36.886+03
84	Lilian	In eu officia cupidatat proident officia consectetur labore occaecat irure quis non eu enim anim.	8972590416	5366145580	Компания	t	2015-12-08 22:59:36.888+03	2015-12-08 22:59:36.888+03
85	Justine	Consequat laborum fugiat cupidatat sint labore veniam.	2367371061	9059067308	Физ-лицо	t	2015-12-08 22:59:36.89+03	2015-12-08 22:59:36.89+03
86	Carolina	Nisi non fugiat excepteur adipisicing sunt do fugiat reprehenderit qui mollit amet.	7910884145	4444206637	ИП	f	2015-12-08 22:59:36.893+03	2015-12-08 22:59:36.893+03
87	Mayer	Mollit cupidatat fugiat commodo elit nulla eu minim incididunt laborum reprehenderit.	8520018098	4136215808	Физ-лицо	f	2015-12-08 22:59:36.895+03	2015-12-08 22:59:36.895+03
88	Adrian	Commodo nisi nostrud enim sint nostrud laboris nulla qui nostrud eiusmod et aliqua occaecat ea.	9325881596	9623977029	Компания	t	2015-12-08 22:59:36.897+03	2015-12-08 22:59:36.897+03
89	Cooke	Do ad irure ut amet anim qui exercitation.	7236780020	7902505800	Компания	f	2015-12-08 22:59:36.9+03	2015-12-08 22:59:36.9+03
90	Jenkins	Sit ut cupidatat irure amet.	2631796880	5023733501	Компания	f	2015-12-08 22:59:36.904+03	2015-12-08 22:59:36.904+03
91	Aurelia	Laborum velit proident labore fugiat amet aliquip nostrud sint deserunt reprehenderit nisi.	9491400557	2068595158	ИП	t	2015-12-08 22:59:36.906+03	2015-12-08 22:59:36.906+03
92	Michael	Ipsum nostrud laborum id laborum proident quis velit non Lorem consequat.	3821211934	9199756084	ИП	f	2015-12-08 22:59:36.909+03	2015-12-08 22:59:36.909+03
93	Josie	Est commodo anim quis non laborum nostrud veniam sint.	4591857851	8774574875	Компания	f	2015-12-08 22:59:36.911+03	2015-12-08 22:59:36.911+03
94	Lyons	In nisi veniam proident excepteur cupidatat in anim ex duis voluptate aliqua.	7891194707	5517602204	Компания	f	2015-12-08 22:59:36.913+03	2015-12-08 22:59:36.913+03
95	Guthrie	Officia esse ut consequat ipsum voluptate adipisicing ullamco deserunt duis fugiat commodo tempor.	4869820025	5424826647	Компания	f	2015-12-08 22:59:36.916+03	2015-12-08 22:59:36.916+03
96	Maureen	Ad eiusmod ea ad laborum aute quis eu laboris proident ad ex.	1251910778	1585386742	Компания	t	2015-12-08 22:59:36.919+03	2015-12-08 22:59:36.919+03
97	Thompson	Anim proident minim eiusmod nisi elit anim exercitation.	6884653041	9576421895	Физ-лицо	f	2015-12-08 22:59:36.926+03	2015-12-08 22:59:36.926+03
98	Maryann	Veniam veniam do cillum commodo fugiat cillum nisi anim ex eu.	4558765035	5869406517	ИП	t	2015-12-08 22:59:36.929+03	2015-12-08 22:59:36.929+03
99	Gabrielle	Aliqua ex nulla aute amet pariatur.	8132832130	3083565864	ИП	f	2015-12-08 22:59:36.932+03	2015-12-08 22:59:36.932+03
100	Freeman	Anim in nulla aute esse in do.	8140290899	2851691544	Компания	f	2015-12-08 22:59:36.936+03	2015-12-08 22:59:36.936+03
\.


--
-- Name: Subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Subjects_id_seq"', 101, true);


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Users" (id, login, password, "firstName", "lastName", phone, "createdAt", "updatedAt") FROM stdin;
1	user	00700b7885f95361590e8dd4a6bd53b567a37f98	user	user	2015-12-06 00:18:12.542+03	2015-12-06 12:51:41.052+03

\.


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Users_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

