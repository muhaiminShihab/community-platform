const rootLink = 'https://rameem2003.github.io/oursite/';
const students = [{
    img: "img/gallery/bipul_hassan_rabbi.jpg",
    name: "মোহাম্মদ রাব্বি",
    roll: "451650",
    blood: "O-",
    profile: "../profiles/mohammad-rabbi-451650.html"
}, {
    img: "img/gallery/urmi.jpg",
    name: "মৌমিতা ইসলাম ঊর্মি",
    roll: "451706",
    blood: "A+",
    profile: "../profiles/moumita-islam-urmi-451706.html"
}, {
    img: "img/gallery/MAHMOOD HASSAN RAMEEM 1.jpg",
    name: "মাহমুদ হাসান রামীম",
    roll: "451638",
    blood: "A+",
    profile: "../profiles/mahmood-hassan-rameem-451638.html"
}, {
    img: "img/gallery/emon_hossain.jpg",
    name: "মোহাম্মদ ইমন হোসেন",
    roll: "451618",
    blood: "B+",
    profile: "../profiles/mohammad-emon-hossain-451618.html"
}, {
    img: "img/gallery/osama.jpg",
    name: "ওয়াসিম আকরাম",
    roll: "451620",
    blood: "O+",
    profile: "../profiles/wasim-akram-451620.html"
}, {
    img: "img/gallery/musanna.jpg",
    name: "জাওহার মুসান্না",
    roll: "451624",
    blood: "O+",
    profile: "../profiles/zawhar-musanna-451624.html"
}, {
    img: "img/gallery/gazi_rasel.jpg",
    name: "গাজি রাসেল",
    roll: "451625",
    blood: "O+",
    profile: "../profiles/gazi-rasel-451625.html"
}, {
    img: "img/gallery/baten.jpg",
    name: "আব্দুল বাতেন",
    roll: "451627",
    blood: "AB+",
    profile: "../profiles/abdul-baten-451627.html"
}, {
    img: "img/gallery/fahmida.jpg",
    name: "ফাহমিদা ইয়াসমিন",
    roll: "451628",
    blood: "A+",
    profile: "../profiles/fahmida-yeasmin-451628.html"
}, {
    img: "img/gallery/mamun_sarkar.jpg",
    name: "মামুন সরকার",
    roll: "451629",
    blood: "O+",
    profile: "../profiles/mamun-sarker-451629.html"
}, {
    img: "img/gallery/sourov.jpg",
    name: "মোহাম্মদ সাজ্জাদ হোসেন সৌরভ",
    roll: "451630",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/senviya.jpg",
    name: "সেংভিয়া চিরান",
    roll: "451631",
    blood: "B+",
    profile: "../profiles/sangvia-chiran-451631.html"
}, {
    img: "img/gallery/tusar_ahmed.jpg",
    name: "তুষার আহমেদ",
    roll: "451632",
    blood: "O+",
    profile: "../profiles/tusar-ahmed-451632.html"
}, {
    img: "img/gallery/arefin_saykot.jpg",
    name: "সুলতানুল আরেফিন",
    roll: "451633",
    blood: "A+",
    profile: "../profiles/sultanul-arifen-451633.html"
}, {
    img: "img/gallery/noyon.jpg",
    name: "নয়ন খলিফা",
    roll: "451634",
    blood: "B+",
    profile: "../profiles/mohammad-noyon-khalifa-451634.html"
}, {
    img: "img/gallery/saad.jpg",
    name: "সাখাওয়াত হোসেন সাদ",
    roll: "451635",
    blood: "O+",
    profile: "../profiles/mohammad-sakhawat-hossain-saad-451635.html"
}, {
    img: "img/gallery/rakib_hossain.jpg",
    name: "মোহাম্মদ রাকিব হোসেন",
    roll: "451636",
    blood: "AB-",
    profile: "../profiles/mohammad-rakib-hossain-451636.html",
}, {
    img: "img/gallery/sagir.jpg",
    name: "মোহাম্মদ সাগির আহমেদ",
    roll: "451637",
    blood: "A+",
    profile: "../profiles/mohammad-shagir-ahmed-451637.html"
}, {
    img: "img/gallery/abu_salem_abdullah.jpg",
    name: "মোহাম্মদ আবু সালেম আবদুল্লাহ",
    roll: "451639",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/shishir.jpg",
    name: "মোহাম্মদ শিশির আহমেদ",
    roll: "451640",
    blood: "O+",
    profile: "../profiles/shishir-ahmed-451640.html"
}, {
    img: "img/gallery/jihad_mahmud.jpg",
    name: "জিহাদ আল মাহমুদ",
    roll: "451641",
    blood: "AB+",
    profile: "../profiles/jihad-al-mahmud-451641.html"
}, {
    img: "img/gallery/mong.jpg",
    name: "মং মং সান",
    roll: "451643",
    blood: "B-",
    profile: "../profiles/mong-mong-san-451643.html"
}, {
    img: "img/gallery/protik_chandro.jpg",
    name: "প্রতিক চন্দ্র বর্মন",
    roll: "451644",
    blood: "B+",
    profile: "../profiles/protik-chandra-barman-451644.html"
}, {
    img: "img/gallery/undraw_female_avatar_w3jk.svg",
    name: "ঊষা সরকার",
    roll: "451645",
    blood: "A+",
    profile: "../profiles/usha-sarkar-451645.html"
}, {
    img: "img/gallery/sayem.jpg",
    name: "আবদুল্লাহ আল সায়েম",
    roll: "451649",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/bithi.jpg",
    name: "বিথি আক্তার",
    roll: "451651",
    blood: "B+",
    profile: "../profiles/bithi-akter-451651.html"
}, {
    img: "img/gallery/mahabul_alam.jpg",
    name: "মোহাম্মদ মাহাবুল আলম",
    roll: "451652",
    blood: "B+",
    profile: "../profiles/mohammad-mahabul-alam-451652.html"
}, {
    img: "img/gallery/undraw_female_avatar_w3jk.svg",
    name: "নুসরাত জাহান স্বর্ণা",
    roll: "451655",
    blood: "B+",
    profile: "../profiles/nusrat-jahan-sorna-451655.html"
}, {
    img: "img/gallery/abdullah_mamun.jpg",
    name: "আবদুল্লাহ আল মামুন",
    roll: "451659",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/undraw_male_avatar_323b.svg",
    name: "নাফিজ মাহমুদ",
    roll: "451660",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/mohiuddin.jpg",
    name: "মোহাম্মদ মহিউদ্দিন",
    roll: "451661",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/rifatunnahar_mim.jpg",
    name: "রিফাতুন নাহার মীম",
    roll: "451663",
    blood: "O+",
    profile: "../profiles/refatun-naher-mim-451663.html"
}, {
    img: "img/gallery/sabina.jpg",
    name: "সাবিনা আক্তার",
    roll: "451665",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/riki.jpg",
    name: "রিকি ডেভিড গোমেজ",
    roll: "451669",
    blood: "AB+",
    profile: "../profiles/ricky-gomes-451669.html"
}, {
    img: "img/gallery/jahid_rasel.jpg",
    name: "জাহিদুল ইসলাম রাসেল",
    roll: "451670",
    blood: "AB+",
    profile: "../profiles/jahedul-islam-rasel-451670.html"
}, {
    img: "img/gallery/nazmul-islam.jpg",
    name: "মোহাম্মদ নাজমুল ইসলাম",
    roll: "451671",
    blood: "A+",
    profile: "../profiles/najmul-islam-451671.html"
}, {
    img: "img/gallery/maysha.jpg",
    name: "সায়মা",
    roll: "451672",
    blood: "AB+",
    profile: "../profiles/sayma-461672.html"
}, {
    img: "img/gallery/junaed.jpg",
    name: "নাজমুস সাকিব জুনায়েদ",
    roll: "451673",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/pias_tushar.jpg",
    name: "পিয়াস মিয়া তুষার",
    roll: "451675",
    blood: "AB+",
    profile: "../profiles/pias-mia-tusher-451675.html"
}, {
    img: "img/gallery/undraw_female_avatar_w3jk.svg",
    name: "জান্নাতুল ফেরদৌস",
    roll: "451676",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/forid.jpg",
    name: "শেখ ফরিদ",
    roll: "451677",
    blood: "O+",
    profile: "../profiles/shekh-farid-451677.html"
}, {
    img: "img/gallery/shihab.jpg",
    name: "মোহাম্মদ মুহাইমিনুল ইসলাম শিহাব",
    roll: "451680",
    blood: "AB+",
    profile: "../profiles/mohammad-muhaiminul-islam-shihab-451680.html"
}, {
    img: "img/gallery/ritu_rahman.jpg",
    name: "ঋতু রহমান",
    roll: "451682",
    blood: "A+",
    profile: "../profiles/reetu-rahman-451682.html"
}, {
    img: "img/gallery/shithila.jpg",
    name: "ফারজানা আক্তার শিথিলা",
    roll: "451683",
    blood: "B+",
    profile: "../profiles/farzana-akter-shithila-451683.html"
}, {
    img: "img/gallery/undraw_male_avatar_323b.svg",
    name: "মোহাম্মদ মাসুদ খান",
    roll: "451684",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/undraw_female_avatar_w3jk.svg",
    name: "খাদিজা আক্তার",
    roll: "451685",
    blood: "B+",
    profile: "../profiles/khadiza-akter-451685.html"
}, {
    img: "img/gallery/sohel.jpg",
    name: "মোহাম্মদ সোহেল রানা",
    roll: "451686",
    blood: "O-",
    profile: "../profiles/mohammad-sohel-rana-451686.html"
}, {
    img: "img/gallery/sumiaya_sinthiya.jpg",
    name: "সুমাইয়া আক্তার",
    roll: "451687",
    blood: "B+",
    profile: "../profiles/sumaiya-akter-451687.html"
}, {
    img: "img/gallery/sakin.jpg",
    name: "শাহরিয়ার আহমেদ সাকিন",
    roll: "451688",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/sujon.jpg",
    name: "মোহাম্মদ অহিদুল ইসলাম সুজন",
    roll: "451689",
    blood: "AB+",
    profile: "../profiles/mohammad-ahidul-islam-sujan-451689.html"
}, {
    img: "img/gallery/naim_kibriya.jpg",
    name: "নাঈম কিবরিয়া",
    roll: "451692",
    blood: "O+",
    profile: "../profiles/nayem-kibria-451692.html"
}, {
    img: "img/gallery/sanjid.jpg",
    name: "মোহাম্মদ সানজিদ আলি",
    roll: "451694",
    blood: "A+",
    profile: "../profiles/mohammad-sanjid-451694.html"
}, {
    img: "img/gallery/rio.jpg",
    name: "মোহাম্মদ রাফাত হাসান",
    roll: "451696",
    blood: "B-",
    profile: "../profiles/mohammad-rafat-hasan-rio-451696.html",
}, {
    img: "img/gallery/undraw_female_avatar_w3jk.svg",
    name: "নাজিয়া সুলাতানা",
    roll: "451698",
    blood: "O+",
    profile: "../profiles/nazia-sultana-451698.html"
}, {
    img: "img/gallery/mahadi.jpg",
    name: "মোহাম্মদ মাহাদি হাসান",
    roll: "451699",
    blood: "O+",
    profile: "../profiles/mahadi-hasan-451699.html"
}, {
    img: "img/gallery/undraw_male_avatar_323b.svg",
    name: "রেদওয়ান রোকন নউশাদ",
    roll: "451700",
    blood: "B+",
    profile: "../profiles/redowan-rukon-nowshad-451700.html"
}, {
    img: "img/gallery/undraw_male_avatar_323b.svg",
    name: "মোহাম্মদ সোবাহান মিয়া",
    roll: "451701",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/sakib_tamim.jpg",
    name: "সাকিবুর রাহমান তামিম",
    roll: "451702",
    blood: "A+",
    profile: "../profiles/sakibur-rahman-tamim-451702.html"
}, {
    img: "img/gallery/undraw_female_avatar_w3jk.svg",
    name: "ফারিয়া ফেরদৌস জ্যোতি",
    roll: "451704",
    blood: "B+",
    profile: "../profiles/faria-ferdus-joti-451704.html"
}, {
    img: "img/gallery/M_R_H_rakib.jpg",
    name: "মোহাম্মদ রাকিব হোসেন",
    roll: "451705",
    blood: "A+",
    profile: "../profiles/mohammad-rakib-hossain-451705.html"
}, {
    img: "img/gallery/al_amin_sabbir.jpg",
    name: "আল আমিন সাব্বির",
    roll: "451707",
    blood: "B+",
    profile: "../profiles/al-amin-sabbir-451707.html"
}, {
    img: "img/gallery/fatema_koli.jpg",
    name: "ফাতেমা বেগম",
    roll: "451708",
    blood: "A+",
    profile: "../profiles/fatema-begum-451708.html"
}, {
    img: "img/gallery/hakim.jpg",
    name: "মোহাম্মদ আব্দুল হাকিম",
    roll: "451709",
    blood: "B+",
    profile: "../profiles/mohammad-abdul-hakim-451709.html"
}, {
    img: "img/gallery/anonto.jpg",
    name: "মাহাতাব ইসলাম অনন্ত",
    roll: "451714",
    blood: "O+",
    profile: "../profiles/mahatab-islam-aunonto-451714.html"
}, {
    img: "img/gallery/pollab.jpg",
    name: "মোহাম্মদ রাকিব হোসেন পল্লব",
    roll: "451722",
    blood: "#",
    profile: "#",
    disabled: "disabled"
}, {
    img: "img/gallery/likhon.jpg",
    name: "লিখন আহমেদ",
    roll: "451723",
    blood: "AB+",
    profile: "../profiles/likhon-ahmed-492723.html"
}, {
    img: "img/gallery/tanvir.jpg",
    name: "মোহাম্মদ তানভীর আহমেদ",
    roll: "453857",
    blood: "O-",
    profile: "../profiles/mohammad-tanvir-ahmed-453857.html"
}, {
    img: "img/gallery/shajal.jpg",
    name: "মোহাম্মদ জাহিদুল ইসলাম সজল",
    roll: "492725",
    blood: "A+",
    profile: "../profiles/mohammad-zahidul-islam-shajal-492725.html"
}, {
    img: "img/gallery/saifullah.jpg",
    name: "শেখ খালিদ সাইফুল্লাহ",
    roll: "494191",
    blood: "A+",
    profile: "../profiles/sheikh-khalid-saifullah-494191.html"
}, {
    img: "img/gallery/rahul.jpg",
    name: "তুষার রাহুল চিশিম",
    roll: "494192",
    blood: "A+",
    profile: "../profiles/tusher-rahul-chisim-494192.html"
}, {
    img: "img/gallery/farhan.jpg",
    name: "মোহাম্মদ হাবিবুর রহমান",
    roll: "495021",
    blood: "B+",
    profile: "../profiles/habibur-rahman-495021.html"
}, {
    img: "img/gallery/chadni.jpg",
    name: "সুমনা ইসলাম চাঁদনী",
    roll: "495514",
    blood: "B+",
    profile: "../profiles/sumona-islam-chadni-495514.html"
}, {
    img: "img/gallery/mainuddin.jpg",
    name: "মোহাম্মদ মাইনউদ্দিন",
    roll: "184391",
    blood: "B+",
    profile: "../profiles/mohammad-mainuddin-184391.html"
}, {
    img: "img/gallery/pathan.jpg",
    name: "মোহাম্মদ পাবেল পাঠান",
    roll: "144812",
    blood: "B+",
    profile: "../profiles/mohammad-pabel-patan-144812.html"
}, {
    img: "img/gallery/josim_uddin.jpg",
    name: "মোহাম্মদ জাসিম উদ্দিন",
    roll: "185533",
    blood: "A+",
    profile: "../profiles/mohamad-jasim-uddin-185533.html",
}, {
    img: "img/gallery/hasanur.jpg",
    name: "মোহাম্মদ হাসানুর রহমান",
    roll: "981622",
    blood: "B+",
    profile: "../profiles/hasanur-rahman-981622.html"
}];