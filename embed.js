let parent_div = document.getElementById('d-body');
	let header_div = document.createElement('div');
	let d_alpha_div = document.createElement('div');
	let d_content_div = document.createElement('div');
	let trans_div = document.createElement('div');
	let modal = document.createElement('div');modal.id="modal";
	let search_result = document.createElement('div');
	let d_feed_div = document.createElement('div');
	header_div.id = "header-div";
	d_alpha_div.id = "d-alpha-div";
	d_content_div.id = "d-content-div";
	trans_div.id = "trans-div";
	search_result.id = "search-result-div";
	d_feed_div.id = "d-feed-div";

	//header div components
	let search_input = document.createElement('input');
	let search_button = document.createElement('button');
	search_button.setAttribute('onclick','search()');
	let translator = document.createElement('button');
	translator.setAttribute('onclick','goTranslator()');
	translator.innerText = "View Translator";
	search_input.placeholder = "Enter what your looking for";
	search_button.innerText = "Search";
	header_div.appendChild(search_input);
	header_div.appendChild(search_button);
	header_div.appendChild(translator);
	search_input.id = "search-item";
	search_button.id = "search-button";
	translator.id = "translator";
	
		//header div CSS
	
	//dictionary alphabetical div components
	let parentList = document.createElement('ul');
	parentList.id = 'd-alpha-parentList';
	let listElements = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

	for(var x=0;x<26;x++){let list=document.createElement('li');list.innerText=listElements[x];list.id="d-alpha-list"+x;list.setAttribute("onclick","filter('"+listElements[x]+"',"+x+")");parentList.appendChild(list);}d_alpha_div.appendChild(parentList);
	
	//dictionary content div components
	let d_content_h1=document.createElement('h1');d_content_h1.id="d-content-h1";d_content_div.appendChild(d_content_h1);
	
	//translator division compontents
	let trans_select_div=document.createElement('div');trans_select_div.id="trans-select-div";
	let trans_select_note=document.createElement('data');
	trans_select_note.innerText="Translate to: ";
	let trans_select=document.createElement('select');
	let trans_select_option1=document.createElement('option');
	trans_select_option1.innerText="Bolinao";
	let trans_select_option2=document.createElement('option');
	trans_select_option2.innerText="Tagalog";
	let trans_select_option3=document.createElement('option');
	trans_select_option3.innerText="English";
	trans_select.appendChild(trans_select_option1);
	trans_select.appendChild(trans_select_option2);
	trans_select.appendChild(trans_select_option3);
	trans_select_div.appendChild(trans_select_note);
	trans_select_div.appendChild(trans_select);
	let trans_input_before=document.createElement('textarea');
	trans_input_before.placeholder="What you want to translate?";
	trans_input_before.id="to-be-translated";
	trans_input_before.setAttribute('onclick','resultTextArea()');
	let trans_input_after=document.createElement('textarea');
	trans_input_after.placeholder="Result of the translation";
	trans_input_after.id="translate-result";
	let trans_button=document.createElement('button');
	trans_button.innerText="Translate";
	trans_button.setAttribute('onclick','searchItem()');
	let trans_options_div=document.createElement('div');
	trans_options_div.id="trans-options-div";
	let close_modal = document.createElement('div');close_modal.id="close-modal-btn";
	trans_options_div.appendChild(trans_select_div);
	trans_select_div.appendChild(trans_button);
	trans_div.appendChild(trans_input_before);
	trans_div.appendChild(trans_options_div);
	trans_div.appendChild(trans_input_after);
	trans_div.appendChild(close_modal);

	//search result components
	let search_result_h2=document.createElement('h2');
	search_result.appendChild(search_result_h2);

	//dictionary feed division compontents
	let d_feed_h2=document.createElement('h2');
	let reminder=document.createElement('article');
	d_feed_h2.innerText="BOLINAO COMMON SENTENCES ";
	reminder.innerText = sentences.myReminder[0];

	let d_feed_list=document.createElement('ul');
	for(var x=0;x<5;x++){let d_feed_bol=document.createElement('li');
		d_feed_bol.innerText=sentences.bolinao[x];
		let d_feed_pron=document.createElement('span');
		d_feed_pron.innerText = "Pronounced as: " + sentences.prons[x];
		d_feed_pron.style = "text-decoration:italic;";
		let d_feed_tag=document.createElement('span');
		d_feed_tag.innerText=sentences.tagalog[x];
		let d_feed_eng=document.createElement('span');
		d_feed_eng.innerText= sentences.english[x];
		d_feed_list.appendChild(d_feed_bol);
		d_feed_list.appendChild(d_feed_pron);
		d_feed_list.appendChild(document.createElement('br'));
		d_feed_list.appendChild(d_feed_tag);
		d_feed_list.appendChild(document.createElement('br'));
		d_feed_list.appendChild(d_feed_eng);
	}
	d_feed_div.appendChild(d_feed_h2);
	d_feed_div.appendChild(reminder);
	d_feed_div.appendChild(d_feed_list);

	//embed to parent divs
	parent_div.appendChild(header_div);
	parent_div.appendChild(d_alpha_div);
	parent_div.appendChild(d_content_div);
	parent_div.appendChild(trans_div);
	parent_div.appendChild(search_result);
	parent_div.appendChild(d_feed_div);
	modal.appendChild(trans_div);
	parent_div.appendChild(modal);

	//functions
	let DictionaryIsVisited = false;

	function closeModal(){
		modal.style.display = "none";
		d_feed_div.style.display = "inline-block";
	}

	//function to find the Dictionary Array .js 			need to add other databses here
	function findDictData(letter){switch(letter){case 'A': return word_A;break;case "B":return word_B;break;case 'D':return word_D;break;case 'E':return word_E;break;case 'G':return word_G;break;case 'I':return word_I;break;case 'K':return word_K;break;case 'L':return word_L;break;case 'M':return word_M;break;case 'N':return word_N;break;case 'O':return word_O;break;case 'P':return word_P;break;case 'R':return word_R;break;}}

	//function to show the data in the Dictionary Array
	function filter(letter,idx){
		let alphaList=document.getElementById('d-alpha-list'+idx);
		let list = document.getElementById('d-alpha-list');
		for(var x=0;x<26;x++){document.getElementById('d-alpha-list'+x).style=`background-color:rgba(0,0,0,0);color:black;`;}
		alphaList.style=`background-color:rgba(255,0,0,0.8);color:white;`;
		d_content_div.style.display = "inline-block";
		d_feed_div.style.display = "none";
		search_result.style.display = "none";
		d_content_h1.innerText = letter;
		let dcl = document.getElementById('d-content-list');
		if(dcl){d_content_div.removeChild(dcl);}loadDataFilter(findDictData(letter));}

	//function to show the translator DIV
	function goTranslator(){if(translator.innerText=="View Translator"){modal.style.display="inline-block";translator.innerText="Close Translator";translator.setAttribute('class','translatorC');}else if(translator.innerText=="Close Translator"){closeModal();translator.innerText="View Translator";translator.setAttribute('class','translatorV');}}

	//Function to search the word the user wants to translate
	function searchItem(){
		let transLang=trans_select.value;
		let transItem=trans_input_before.value;
		let data=searchDatabase(transItem);
		if(transLang=="Bolinao"){
			if(data){
				for(var x=0;x<data.rel.length;x++){
					if(data.rel[x] =="found exact word"){
						trans_input_after.innerText=data.bol[0];							
					}else{trans_input_after.innerText=sentences.T_noDataFound[0];close_modal.innerText=sentences.T_noDataFound[1]}
				}
			}
			else{alert(sentences.T_noDataFound[2]);}
		}else if(transLang=="Tagalog"){
			if(data){
				for(var x=0;x<data.rel.length;x++){
					if(data.rel[x] =="found exact word"){
						trans_input_after.innerText=data.tag[0];							
					}else{trans_input_after.innerText=sentences.T_noDataFound[0];close_modal.innerText=sentences.T_noDataFound[1]}
				}
			}
			else{alert(sentences.T_noDataFound[2]);}
		}else if(transLang=="English"){
			if(data){
				for(var x=0;x<data.rel.length;x++){
					if(data.rel[x] =="found exact word"){
						trans_input_after.innerText=data.eng[0];							
					}else{trans_input_after.innerText=sentences.T_noDataFound[0];close_modal.innerText=sentences.T_noDataFound[1]}
				}
			}
			else{alert(sentences.T_noDataFound[2]);}
		}else{
			trans_input_after.innerText = "Please specify the language.";}}

	//function to clear textarea
	function resultTextArea(){trans_input_before.innerText = "";trans_input_after.innerText = "";}
	
	//function to get the letter the user clicks
	function getAlphaIndex(item){for (var x = 0; x < listElements.length;x++){if(item == listElements[x]){return x}}}

	//function to search to all the databases when user clicks the search button
	function search(){let rl=document.getElementById('search-results');if(rl != null){search_result.removeChild(rl);showResultsList();}else{showResultsList();}}

	//function to show the result of the searching function
	function showResultsList(){
		search_result.style.display = "inline-block";
		d_content_div.style.display = "none";
		modal.style.display = "none";
		d_feed_div.style.display = "none";
		search_result_h2.innerText = "Search result for " + search_input.value + ":";
		let data = searchDatabase(search_input.value);
		let resultsList = document.createElement('ol');
		resultsList.id = "search-results";
		for(var x = 0; x < data.len;x++){
			let resultsListItem1 = document.createElement('li');
			let resultsListItem2 = document.createElement('dd');
			let resultsListItem3 = document.createElement('dd');
			let resultsListItem4 = document.createElement('dd');
			resultsListItem4.innerText = data.eng[x] + " in English";
			resultsListItem3.innerText = data.tag[x] + " in Tagalog";
			resultsListItem2.innerText = data.frm[x] + "  Pronounced as " + data.prons[x];
			resultsListItem1.innerText = data.bol[x] + " in Bolinao term " + " ("+data.rel[x]+")" ;
			resultsListItem1.appendChild(resultsListItem2);
			resultsListItem1.appendChild(resultsListItem3);
			resultsListItem1.appendChild(resultsListItem4);
			resultsList.appendChild(resultsListItem1);
			resultsListItem1.style = `padding:2%;font-size:18pt;list-style:circle;`;
			resultsListItem2.style = `font-size:13pt;`;
			resultsListItem3.style = `font-size:13pt;`;
			resultsListItem4.style = `font-size:13pt;`;
		}
		search_result.appendChild(resultsList);		
	}

	//function to search which database will be used when searching+rendered by function search
	function searchDatabase(item) {
																//must add otherdatabases
		
		let dataList = [word_A,word_B,word_D,word_E,word_G,word_I,word_K,word_L,word_M,word_N,word_O,word_P,word_R];							
		
		let data={bol:[],tag:[],eng:[],frm:[],prons:[],len:0,rel:[]};
		for(var x=0;x<dataList.length;x++){
		 for(var y=0;y<dataList[x].bolinao.length;y++){
			if(item == dataList[x].bolinao[y]||dataList[x].bolinao[y].includes(item)||
				item == dataList[x].tagalog[y]||dataList[x].tagalog[y].includes(item)||
				item == dataList[x].english[y]||dataList[x].english[y].includes(item)){
				   data.bol[data.len] = dataList[x].bolinao[y];
				   data.tag[data.len] = dataList[x].tagalog[y];
				   data.eng[data.len] = dataList[x].english[y];
				   data.frm[data.len] = dataList[x].form[y];
				   data.prons[data.len] = dataList[x].prons[y];
				   data.rel[data.len] = "related word";
				   data.len++;
					if(item == dataList[x].bolinao[y]|| 
			    	 item == dataList[x].tagalog[y]||
			    	 item == dataList[x].english[y]){
					   data.bol[data.len] = dataList[x].bolinao[y];
					   data.tag[data.len] = dataList[x].tagalog[y];
					   data.eng[data.len] = dataList[x].english[y];
					   data.frm[data.len] = dataList[x].form[y];
					   data.prons[data.len] = dataList[x].prons[y];
					   data.rel[data.len] = "found exact word";
					   data.len++;
					}
				}
			}	
		}
		return data;
	}

	//function to load the data dictionary and displays the data
	function loadDataFilter(array){
		let ltrMSG=document.getElementById('ltr-msg');
		if(array==undefined){
		  if(ltrMSG!=null){d_content_div.removeChild(document.getElementById('ltr-msg'));let msg=document.createElement('p');msg.id='ltr-msg';msg.innerText=sentences.noData[0];msg.style=`padding:2.5px;color:#223345;font-size:14pt;width:100%;text-align:center;`;d_content_div.appendChild(msg);
			}else{
			  let msg=document.createElement('p');msg.id='ltr-msg';msg.innerText=sentences.noData[0];msg.style=`padding:2.5px;color:#223345;font-size:14pt;width:100%;text-align:center;`;d_content_div.appendChild(msg);
			}		
		}else{
			if(ltrMSG!=null){d_content_div.removeChild(ltrMSG);}
			let d_content_list = document.createElement('ul');
			d_content_list.id = "d-content-list";
			d_content_list.style = "list-style:none;";
			for(var x = 0;x < array.tagalog.length;x++){
				let d_content_list_data_word = document.createElement('li');
				let d_content_list_data_form_pron = document.createElement('article');
				let d_content_list_data_tagalog = document.createElement('article');
				let d_content_list_data_english = document.createElement('article');
				d_content_list_data_word.innerText = array.bolinao[x];
				d_content_list_data_form_pron.innerText = array.form[x]+ ". Pronounced as: "+ array.prons[x];
				d_content_list_data_tagalog.innerText = array.tagalog[x] + "  in Tagalog";
				d_content_list_data_english.innerText = array.english[x] + "  in English";
				d_content_list_data_word.appendChild(d_content_list_data_form_pron);
				d_content_list_data_word.appendChild(d_content_list_data_tagalog);
				d_content_list_data_word.appendChild(d_content_list_data_english);
				d_content_list.appendChild(d_content_list_data_word);
				//CSS
				d_content_list_data_form_pron.style=`font-size:15pt;text-indent:5%;margin:0px;margin-left:10%;`;
						
			}
			d_content_div.appendChild(d_content_list);
		}	
	}
