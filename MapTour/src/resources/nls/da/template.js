﻿define(
({
		viewer: {
			loading: {
				step1: "INDLÆSER APPLIKATION",
				step2: "INDLÆSER DATA",
				step3: "STARTER TUREN",
				fail: "Beklager, indlæsning af Map Tour mislykkedes",
				failButton: "Prøv igen"
			},
			errors: {
				boxTitle: "Der opstod en fejl",
				invalidConfig: "Uoprettelig fejl: Ugyldig konfiguration",
				invalidConfigOwner: "Uoprettelig fejl: Ugyldig konfiguration (autoriseret ejer kræves)",
				invalidConfigNoWebmap: "Uoprettelig fejl: Ugyldig konfiguration (webkort og autoriseret ejer kræves)",
				createMap: "Kan ikke oprette kort",
				invalidApp: "Uoprettelig fejl: Applikationen kan ikke indlæses",
				noLayer: "Webkort indeholder ikke et gyldigt datalag for kortturen.",
				noLayerNoHostedFS: "Webkortet indeholder ikke noget gyldigt datalag for kortturen, og du har ikke de rettigheder, der kræves for at oprette en \"hosted\" featuretjeneste.",
				noLayerMobile: "Velkommen til Map Tour-webapplikationen. Applikationen er ikke konfigureret. Map Tour builder-programmet understøttes ikke på mobile enheder.",
				noLayerView: "Velkommen til Map Tour-webapplikationen.<br />Applikationen er endnu ikke konfigureret.",
				noBuilderWebmapData: "Map Tour-builderprogrammet understøttes ikke for webkortindlejrede data. Hvis du vil bruge builderprogrammet, skal du bruge en featuretjeneste. Hvis du vil bruge dit aktuelle datalag, skal du bruge den version af Map Tour, der kan downloades.",
				appSave: "Fejl ved lagring af webapplikationen",
				mapSave: "Fejl ved lagring af webkortet",
				featureServiceLoad: "Error loading feature service",
				notAuthorized: "Du har ikke autorisation til at konfigurere denne applikation",
				oldBrowserTitle: "Browser understøttes ikke fuldt ud",
				noBuilderIE8: "The Map Tour builder is not supported on Internet Explorer before version 9.",
				ie10Win7Explain: "Map Tour-builderprogammet understøttes ikke for Internet Explorer 10 under Windows 7. Du skal <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>manuelt tvinge dokumenenttilstanden til at følge Internet Explorer 9-standarden</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>nedgradere til Internet Explorer 9</a> eller opgradere til Windows 8.",
				oldBrowserExplain: "Denne browser understøtter ikke automatisk miniaturegenerering af de billeder, du overfører til din korttur. Du kan oprette en korttur med denne browser, men du skal oprette et separat miniaturebillede for hver af de billeder, du overfører.",
				oldBrowserExplain2: "For at forbedre din oplevelse skal du <a href='http://browsehappy.com/' target='_blank'>opgradere din browser</a> eller <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>aktivere Google Chrome Frame for Internet Explorer</a>.",
				oldBrowserClose: "Luk"
			},
			mobileHTML: {
				showIntro: "VIS INTRO",
				hideIntro: "SKJUL INTRO",
				navList: "Liste",
				navMap: "Kort",
				navInfo: "Oplysninger"
			},
			desktopHTML: {
				storymapsText: "Et historiekort",
				builderButton: "Skift til builder-tilstand"
			},
			builderHTML: {
				panelHeader: "APPLIKATIONSKONFIGURATION",
				buttonSave: "GEM",
				buttonDiscard: "ANNULLÉR",
				buttonSettings: "Indstillinger",
				buttonView: "Visningstilstand",
				buttonOrganize: "Organisér",
				buttonAdd: "Tilføj",
				modalCancel: "Annullér",
				modalApply: "Anvend",
				organizeHeader: "Organisér turen",
				organizeGeneralCaption: "Brug træk og slip til at sortere turpunkter",
				organizeDelete: "Slet",
				organizeHide: "Skjul",
				addMaxPointReached: "Du har nået det maksimale antal punkter, der er autoriseret af de indstillede ikoner, og du kan ikke tilføje endnu et turpunkt.<br /><br />Bemærk, at hvis du sletter eksisterende punkter, skal du genindlæse applikationen.",
				addMaxPointReachedMobile: "Beklager, du har nået det maksimale antal autoriserede points og kan ikke tilføje dette billede.",
				addClose: "Luk",
				addHeader: "Tilføj et nyt turpunkt",
				addTabPicture: "Billede",
				addTabInformation: "Oplysninger",
				addTabLocation: "Sted",
				addSelectCaption: "Vælg eller slet billede",
				addSelectCaptionNoFileReader: "Vælg billede",
				addChangePhoto: "Redigér billede og miniature",
				addPictureResolutionIntro: "Billedopløsningen er højere end krævet:",
				addPictureResolutionOldBrowser: "Billedopløsningen er højere end krævet. Optimér Map Tour-oplevelsen ved at indstille en opløsning, der er lavere end %RECOMMENDED_RES%.",
				addPictureResolutionResize: "Skift billedopløsning til %RESOLUTION%",
				addPictureResolutionKeep: "Behold den oprindelige opløsning på %RESOLUTION%",
				addSelectThumbnail: "Vælg miniaturebillede",
				addNoThumbSelected: "Intet miniaturebillede valgt",
				addThumbSelected: "Valgt",
				addCameraSettingsHeader: "KAMERAINDSTILLLINGER",
				addThumbnailHeader: "MINIATUREBILLEDE",
				addLabelName: "Navn",
				addLabelDescription: "Billedtekst",
				addTextPlaceholder: "Skriv noget",
				addLocatePlaceholder: "Find en adresse eller et sted",
				addPinColor: "Farve",
				addLatitude: "Breddegrad",
				addLongitude: "Længdegrad",
				addLatitudePlaceholder: "f.eks. 34,056",
				addLongitudePlaceholder: "f.eks. -117,195",
				addUploading: "Overfører turpunkt",
				addSave: "Tilføj turpunkt",
				addMobileUploading: "Overfører billede",
				addMobileName: "Angiv et navn",
				addMobileNameMandatory: "Fejl, angiv et navn.",
				addMobileError: "Beklager, noget er gået galt",
				settingsHeader: "Applikationsindstillinger",
				settingsTabLayout: "Layout",
				settingsTabColor: "Farver",
				settingsTabLogo: "Logo",
				settingsTabFields: "Data",
				settingsTabExtent: "Område",
				settingsTabZoom: "Zoomniveau",
				settingsLayoutExplain: "Vælg ét af de to viste applikationslayout.",
				settingsLayoutProfessional: "Layout med tre paneler",
				settingsLayoutModern: "Integreret layout",
				settingsLayoutSelected: "Vælg layout",
				settingsLayoutSelect: "Vælg dette layout",
				settingsColorExplain: "Skift udseende ved at vælge et foruddefineret tema eller ved at oprette dit eget.",
				settingsLabelColor: "Farver på toptekster, indhold og bundtekster",
				settingsLogoExplain: "Tilpas toptekstlogoet  (maks. 250 x 50 pixel).",
				settingsLogoEsri: "Esri-logo",
				settingsLogoNone: "Intet logo",
				settingsLogoCustom: "Brugerdefineret logo",
				settingsLogoCustomPlaceholder: "Billede-URL",
				settingsLogoCustomTargetPlaceholder: "Klik gennem-link",
				settingsLogoSocialExplain: "Tilpas header-linket øverst til højre.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Link",
				settingsDataFieldsExplain: "Vælg fotonavn, billedtekst og farvefelter.",
				settingsDataFieldsError: "Applikationen kan ikke fastsætte et passende navn, billedtekst eller farvedata. Vælg de felter, der skal bruges her. Disse indstillinger kan ændres på et senere tidspunkt.",
				settingsFieldsLabelName: "Navn",
				settingsFieldsLabelDescription: "Billedtekst",
				settingsFieldsLabelColor: "Farve",
				settingsExtentExplain: "Indstil startudstrækningen for kortturen via det interaktive kort nedenfor.",
				settingsExtentExplainBottom: "Denne udstrækning bruges kun, hvis den omfatter det første punkt på turen. Værdien bevares i forbindelse med kortturens startudstrækning.",
				settingsExtentDrawBtn: "Tegn ny udstrækning",
				settingsExtentModifyBtn: "Redigér den aktuelle udstrækning",
				settingsExtentApplyBtn: "Anvend på hovedkort",
				settingsZoomExplain: "Indstil zoom for historiepunkter efter introduktionen (valgfrit).",
				settingsLabelZoom: "Skala/niveau",
				settingsZoomFirstValue: "Ingen",
				settingsFieldError : "Vælg et felt i hver liste",
				dataHeader: "Applikationsdata",
				dataExplain: "Dit webkort indeholder ikke en featuretjeneste. Udfyld denne dialogboks for at oprette en \"hosted\" featuretjeneste inde i din ArcGIS.com-organisationskonto. Featuretjenesten vil blive føjet til dit webkort og delt offentligt, men du er den eneste, der har tilføjelses-/redigerings- og sletningsrettigheder.<br /><br />Applikationen kan kun ses af dig, indtil du deler den med andre. <strong>Når din korttur er klar, kan du dele applikationen via elementsiden.</strong>",
				dataNameLbl: "Tjenestenavn",
				dataFolderListLbl: "Mappe",
				dataFolderListFetching: "Henter mapper...",
				dataRootFolder: "Rod",
				dataNameError: "Indtast et navn for featuretjenesten",
				dataFolderError: "Vælg en gyldig mappe",
				dataSrcContainsInvalidChar: "Navnet på featuretjenesten indeholder et eller flere ugyldige tegn (<, >, #, %, :, \", ?, &, +, / eller \).",
				dataSrvAlreadyExistsError: "Der findes allerede en tjeneste med dette navn i organisationen. Vælg et andet navn.",
				dataBtnClose: "Annullér turen",
				dataBtnSave: "Opret tjenesten",
				dataFooterProgress: "Oprettelse i gang",
				dataFooterSucceed: "Oprettelse lykkedes. Indlæser",
				dataFooterError: "Oprettelse mislykkedes. Prøv igen",
				tabError: "Kontrollér for fejl på alle faner",
				introRecordBtn: "Introduktion",
				introRecordActivate: "Brug det første punkt som introduktion"
			},
			addPopupJS: {
				uploadingPicture: "Overfører billede",
				uploadSuccess: "Overførsel lykkedes",
				uploadError: "Fejl ved overførsel af billede",
				notJpg: "Vælg et jpeg-foto at overføre",
				errorNoPhoto: "Vælg et billede at overføre",
				errorNoThumbnail: "Vælg et miniaturebillede at overføre",
				errorNoName: "Angiv et navn for dette turpunkt",
				errorNoDescription: "Angiv en billedtekst for dette turpunkt",
				errorNoLocation: "Indstil en position for dette turpunkt"
			},
			builderJS: {
				noPendingChange: "Ingen ventende ændringer",
				unSavedChangeSingular: "1 ikke-gemt ændring",
				unSavedChangePlural: "ikke-gemte ændringer",
				popoverDiscard: "Er du sikker på, at du vil slette nogle ikke-gemte ændringer?",
				yes: "Ja",
				no: "Nej",
				popoverLoseSave: "Ved at åbne viseren mister du eventuelle ikke-gemte ændringer",
				ok: "OK",
				popoverSaveWhenDone: "Glem ikke at gemme, når du er færdig",
				closeWithPendingChange: "Er du sikker på, at du vil bekræfte denne handling? Dine ændringer vil gå tabt.",
				gotIt: "OK",
				savingApplication: "Gemmer applikation",
				saveSuccess: "Applikation gemt med succes",
				saveError: "Lagring mislykkedes, prøv igen",
				dragColorPicker: "Flyt mig rundt,<br />eller skift min farve",
				dataWarningExtent: "Du har data uden for webkortudstrækningen. Disse data vil ikke blive brugt som turpunkter. Du skal ændre kortudstrækningen, hvis du vil bruge dem.",
				dataWarningVisibi: "Dit Map Tour-lag er ikke synligt med den aktuelle webkortudstrækning. Bekræft, at dit Map Tour-lag vil være synligt med et %MAPSIZE% større kort.",
				dataWarningEdit: "Redigér webkort",
				dataWarningClose: "Luk",
				signIn: "Log ind med en konto på",
				signInTwo: "for at gemme applikationen."
			},
			organizePopupJS: {
				messageStart: "Du har valgt at slette",
				messageSinglePoint: "ét turpunkt",
				messageMultiPoint: "turpunkter",
				messagePermantRemove: "Dette vil permanent fjerne",
				messageRecord: "post",
				messageRecordPlural: "poster",
				messageConfirm: "fra din database. Vil du fortsætte?",
				labelButtonShow: "Vis",
				labelButtonHide: "Skjul"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "This will permanently delete the picture and thumbnail",
				popoverDeleteWarningThumb: "This will permanently delete the thumbnail",
				popoverUploadingPhoto: "Overfører billede og miniaturebillede",
				popoverUploadingThumbnail: "Overfører miniaturebillede",
				popoverUploadSuccessful: "Overførsel lykkedes",
				popoverUploadError: "Overførsel mislykkedes, prøv igen",
				changePicAndThumb: "Redigér billede",
				changeThumb: "Redigér miniaturebillede",
				selectPic: "Redigér billede",
				selectThumb: "Redigér miniaturebillede",
				uploadPicAndThumb: "Anvend"
			},
			headerJS:{
				editMe: "Redigér mig!",
				templateTitle: "Indstil skabelontitel",
				templateSubtitle: "Indstil skabelonundertitel"
			},
			crossFaderJS:{
				setPicture: "Indstil billedtitel",
				setCaption: "Indstil billedtekst"
			}
        }
    })
);
