{"version":3,"sources":["script.js"],"names":["window","updateImconnectorSettings","settingsReload","node","BX","showWait","ajax","post","result","document","getElementById","innerHTML","closeWait","accordeon","element","accordionItems","Array","divs","getElementsByTagName","i","length","className","push","accordeonHeight","lastElementChild","offsetHeight","thisHeight","style","height","popupShow","idForm","popupShowTrue","PopupWindow","closeIcon","right","top","titleBar","message","closeByEsc","autoHide","content","overlay","backgroundColor","opacity","buttons","PopupWindowButton","text","events","click","submit","this","popupWindow","close","show","showHideImconnectors","elementShow","getAttribute","txt","txtcons","elementWrapper","parentNode","elementWrapperHasClass","setAttribute","copyImconnector","elementAttr","copyInput","select","successful","execCommand","msg","alert","err","copyToClipboard","input","createElement","value","dataset","body","appendChild","e","removeChild","addPreloader","preloaderOverlay","create","props","loader","Loader","target"],"mappings":"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","file":"script.map.js"}