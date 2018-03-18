var word_A = {
	bolinao: ["abante","abas","abaw","adal","adani","adti","agameren","agom","akay","alaki","amay","ambog","amot","anas","ane","andyak","apay","apid","arak","arek","aras","ari","aronsa","arkos","asi","atado","ator","awro"],
	tagalog: ["abante","mali","madami","aral","malapit","saan","kagamitan","sakim","turo","malaki","tito","mayabang","init","bulong","ano","ayaw","banig","pinsan","alak","halik","pera","kapatid","kaunlaran","palamuti","swerte","hati/tumpok","nitabi/naitago","araw"],
	english: ["forward","wrong","plenty","learning","near","where","properties","selfish","teaching","big","uncle","boastful","heat","whisper","what","don't want","mat","relative","wine/liquor","kiss","younger brother/sister","coins","progress","decoration","luck","slice/bunch of item for sale","something kept for emergency","day/sun"],
	form: ["adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj","adj"],
	prons: ["a-ban-te","a-bas","a-baw","a-dal","a-da-ni","ad-ti","a-ga-me-ren","a-gom","a-kay","a-la-ki","a-may","am-bog","a-mot","anas","ane","an-dyak","apay","a-pid","a-rak","a-rek","a-ras","-ari","aron-sa","ar-kos","a-si","ata-do","a-tor"]
};
//for(var x = 0; x < word_A.bolinao.length;x++){console.log(word_A.bolinao[x] + " - "+ word_A.tagalog[x] + " - "+ word_A.english[x]+ " - "+ word_A.form[x]+ " - "+ word_A.prons[x]);console.log('-----');}
//common sentences in Bolinao dialect
var sentences = {
	bolinao: ['Adti ka mako? ','Kae ko rabay en. ','Angkay magwa manepet? ','Kano ka magawid? ',"Omno'y pasahe anggan babali? "],
	tagalog: ['Saan ka pupunta? ','Ayaw ko nyan. ','Kuya/Ate pwede magtanong?','Kailan ka uuwi? ','Magkano ang pamasahe hanggang bayan? '],
	english: ['Where are you going? ',"I don't like that.",'Can i ask you a question? ','When will you come home? ','How much it cost to travel to town? '],
	prons: ['Ad-ti ka ma-ko?','Ka-e ko ra-bay en','Ang-kay mag-wa ma-ne-pet?','Ka-no ka ma-ga-wid?',"Om-no'y pa-sa-he- ang-gan ba-ba-li?",],
	myReminder: ["Suppose you are traveling to Bolinao and finds it hard to communicate. Well, worry no more because here at BOLINAO INSIDER, we are giving you the most common bolinao dialogue that may help you to communicate upon your visit."],
	noData: ["We are doing our best to research all of Bolinao words according with this letter. We assure you to fill out all possible words regarding with this letter","Try searching your word at the search panel. Thanks"],
	T_noDataFound: ["No data found!"]
};

var links = {
	myAddress: ["https://bolinaoinsider.com"],
	affiliates: []
}
