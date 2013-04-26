﻿define(
({
		viewer: {
			loading: {
				step1: "טעינת אפליקציה",
				step2: "טעינת מידע",
				step3: "אתחול הסיור",
				fail: "סליחה, טעינת מפת סיור נכשלה",
				failButton: "נסה שוב"
			},
			errors: {
				boxTitle: "אירעה שגיאה",
				invalidConfig: "שגיאה קריטית: קביעת תצורה לא תקינה",
				invalidConfigOwner: "שגיאה קריטית: קביעת תצורה לא תקינה (חייב להיות בעלים מוכרים)",
				invalidConfigNoWebmap: "שגיאה קריטית: קביעת תצורה לא תקינה (חייב להיות בעלים מוכרים ו- web map)",
				createMap: "לא ניתן ליצור מפה",
				invalidApp: "שגיאה קריטית: לא ניתן לטעון את האפליקציה",
				noLayer: "ה- web map לא מכיל שכבת מידע תקינה עבור מפת סיור",
				noLayerNoHostedFS: "ה- web map לא מכיל שכבת מידע תקינה עבור מפת סיור ולך אין את ההרשאות הנדרשות בכדי ליצור שירות ישויות מאוכסן.",
				noLayerMobile: "ברוכים הבאים לאפליקצית web מסוג מפת סיור. לא נקבעה תצורה לאפליקציה. כלי בניית מפת הסיור לא נתמך במכשיריים ניידים.",
				noLayerView: "ברוכים הבאים לאפליקצית ה- web של מפת הסיור.<br />טרם נקבעה תצורה לאפליקציה.",
				noBuilderWebmapData: "כלי בנית מפת הסיור לא נתמך בנתוני שיבוץ של ה - web map. בכדי להשתמש בכלי הבניה, עליך להשתמש בשירות ישויות. בכדי להשתמש בשכבת הנתונים שלך האמיתית, אתה חייב להשתמש בגרסה המאפשרת הורדה של מפת סיור.",
				appSave: "שגיאה בשמירת אפליקצית ה- web",
				mapSave: "שגיאה בשמירת ה- web map",
				featureServiceLoad: "Error loading feature service",
				notAuthorized: "אינך מורשה לקבוע תצורה עבור אפליקציה זו",
				oldBrowserTitle: "אין תמיכה מלאה בדפדפן",
				noBuilderIE8: "The Map Tour builder is not supported on Internet Explorer before version 9.",
				ie10Win7Explain: "כלי בנית מפת הסיור לא נתמך ב- Internet Explorer 10 על Windows 7. עליך לגרום לכך באופן ידני <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'> לעבור למצב document בסטנדרט של Internet Explorer 9</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>שינמוך ל- Internet Explore 9</a> או שידרוג ל- Windows 8.",
				oldBrowserExplain: "דפדפן זה לא תומך ביצירת תמונה ממוזערת אוטומטית מתוך התמונות שטענת למפת הסיור. באפשרותך ליצור מפת סיור על ידי דפדפן זה, אך תצטרך לספק תמונה ממוזערת בנפרד לכל אחת מהתמונות שתעלה.",
				oldBrowserExplain2: "בכדי לשפר את ההתנסות שלך, <a href='http://browsehappy.com/' target='_blank'>שדרג את הדפדפן שלך</a>או  <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>הפעל Google Chrome Frame for Internet Explorer</a>.",
				oldBrowserClose: "סגור"
			},
			mobileHTML: {
				showIntro: "הצג הקדמה",
				hideIntro: "הסתר הקדמה",
				navList: "רשימה",
				navMap: "מפה",
				navInfo: "מידע"
			},
			desktopHTML: {
				storymapsText: "מפת סיפור",
				builderButton: "עבור למצב בנייה"
			},
			builderHTML: {
				panelHeader: "קביעת תצורת אפליקציה",
				buttonSave: "שמירה",
				buttonDiscard: "ביטול",
				buttonSettings: "הגדרות",
				buttonView: "מצב צפיה",
				buttonOrganize: "ארגן",
				buttonAdd: "הוספה",
				modalCancel: "ביטול",
				modalApply: "בצע",
				organizeHeader: "ארגן את מאפייני הסיור",
				organizeGeneralCaption: "השתמש ביכולת גרירה ומיקום בכדי למיין את נקודות הסיור",
				organizeDelete: "מחק",
				organizeHide: "הסתר",
				addMaxPointReached: "הגעת למספר המקסימלי של נקודות מורשות על ידי סט האייקונים ולא ניתן להוסיף עוד נקודת סיור.<br /><br />שים לב שאם תבחר למחוק נקודות קיימות, תיאלץ לטעון את האפליקציה שוב.",
				addMaxPointReachedMobile: "סליחה, הגעת למספר המקסימלי של נקודות מורשות ואינך יכול להוסיף תמונה זו.",
				addClose: "סגור",
				addHeader: "הוסף נקודת סיור חדשה",
				addTabPicture: "תמונה",
				addTabInformation: "מידע",
				addTabLocation: "מיקום",
				addSelectCaption: "בחר או גרור תמונה",
				addSelectCaptionNoFileReader: "בחר תמונה",
				addChangePhoto: "שנה תמונה ותמונה ממוזערת",
				addPictureResolutionIntro: "רזולוצית התמונה גבוהה מהנדרש:",
				addPictureResolutionOldBrowser: "רזולוצית התמונה גבוהה מהנדרש. ניתן למקסם את חווית מפת הסיור על ידי הגדרת רזולוציה נמוכה יותר מה- %RECOMMENDED_RES%.",
				addPictureResolutionResize: "שנה את רזולוצית התמונה ל-  %RESOLUTION%",
				addPictureResolutionKeep: "שמור על הרזולוציה המקורית של ה-  %RESOLUTION%",
				addSelectThumbnail: "בחר תמונה ממוזערת",
				addNoThumbSelected: "לא נבחרה תמונה ממוזערת",
				addThumbSelected: "נבחר",
				addCameraSettingsHeader: "הגדרות מצלמה",
				addThumbnailHeader: "תמונה ממוזערת",
				addLabelName: "שם",
				addLabelDescription: "כותרת משנה",
				addTextPlaceholder: "הקלד משהו",
				addLocatePlaceholder: "אתר כתובת או מקום",
				addPinColor: "צבע",
				addLatitude: "קו רוחב",
				addLongitude: "קו אורך",
				addLatitudePlaceholder: "לדוגמה 34.056",
				addLongitudePlaceholder: "לדוגמה - 117.195",
				addUploading: "טוען נקודות סיור",
				addSave: "הוסף נקודת סיור",
				addMobileUploading: "טוען תמונה",
				addMobileName: "הכנס שם",
				addMobileNameMandatory: "שגיאה, אנא הכנס שם.",
				addMobileError: "סליחה, אך משהו השתבש",
				settingsHeader: "הגדרות אפליקציה",
				settingsTabLayout: "תצוגה",
				settingsTabColor: "צבעים",
				settingsTabLogo: "כותרת עליונה",
				settingsTabFields: "מידע",
				settingsTabExtent: "תיחום",
				settingsTabZoom: "רמת התמקדות",
				settingsLayoutExplain: "בחר תצוגת אפליקציה מבין השתיים שסופקו.",
				settingsLayoutProfessional: "תצוגה בעלת שלושה פאנלים",
				settingsLayoutModern: "תצוגה משולבת",
				settingsLayoutSelected: "תצוגה נבחרת",
				settingsLayoutSelect: "בחר תצוגה זו",
				settingsColorExplain: "שנה ניראות על ידי בחירת נושא מוגדר מראש או יצירת מראה משלך.",
				settingsLabelColor: "צבעים של כותרת עליונה, תוכן וכותרת תחתונה",
				settingsLogoExplain: "התאם את הלוגו של הכותרת העליונה (המקסימום הוא 250 x 50 פיקסלים)",
				settingsLogoEsri: "לוגו של Esri",
				settingsLogoNone: "אין לוגו",
				settingsLogoCustom: "לוגו מותאם",
				settingsLogoCustomPlaceholder: "URL של תמונה",
				settingsLogoCustomTargetPlaceholder: "קישור זמין",
				settingsLogoSocialExplain: "התאם הלינק בצד ימין עליון של הכותרת העליונה",
				settingsLogoSocialText: "טקסט",
				settingsLogoSocialLink: "קישור",
				settingsDataFieldsExplain: "בחר שם תמונה, הסבר ושדות צבע",
				settingsDataFieldsError: "האפליקציה לא יכולה לקבוע את השם הנכון, ההסבר ונתוני הצבע. אנא בחר את השדות הרלוונטיים כאן. ניתן לשנות הגדרות אלו בזמן מאוחר יותר",
				settingsFieldsLabelName: "שם",
				settingsFieldsLabelDescription: "כותרת משנה",
				settingsFieldsLabelColor: "צבע",
				settingsExtentExplain: "קבע את התיחום ההתחלתי של מפת הסיור על ידי המפה האינטראקטיבית שלהלן.",
				settingsExtentExplainBottom: "תיחום זה יהיה בשימוש רק אם הוא נכלל בנקודת הסיור הראשונה. הערך נשאר קבוע לאורך התיחום ההתחלתי של ה- web map.",
				settingsExtentDrawBtn: "שרטט תיחום חדש",
				settingsExtentModifyBtn: "ערוך את התיחום הנוכחי",
				settingsExtentApplyBtn: "יישם על המפה המרכזית",
				settingsZoomExplain: "קבע התמקדות עבור נקודות הסיפור לאחר ההקדמה (אפשרי).",
				settingsLabelZoom: "קנה מידה/רמת התמקדות",
				settingsZoomFirstValue: "ללא",
				settingsFieldError : "אנא בחר שדה בכל רשימה",
				dataHeader: "נתוני אפליקציה",
				dataExplain: "ה- web map לא מכיל שירות ישויות. השלם את חלון דו השיח הזה בכדי ליצור שירות ישויות המאוכסן בתוך חשבון הארגון של  ArcGIS.com שלך. שירות הישויות יתווסף ל- web map ויהיה משותף לציבור אך רק לך יהיו הרשאות הוספה/ עריכה ומחיקה.<br /><br />רק אתה תוכל לצפות באפליקציה עד שתשתף אותה עם אחרים. <strong>ברגע שמפת הסיור שלך מוכנה, תוכל לשתף את האפליקציה על ידי עמוד הפריט.</strong>",
				dataNameLbl: "שם שירות",
				dataFolderListLbl: "תיקייה",
				dataFolderListFetching: "משיג תיקיות...",
				dataRootFolder: "מקור",
				dataNameError: "הכנס שם עבור שירות הישויות",
				dataFolderError: "בחר תיקייה תקינה",
				dataSrcContainsInvalidChar: "שם שירות הישויות מכיל תו אחד או יותר שאינו תקין (<, >, #, %, :, \", ?, &, +, /, or \).",
				dataSrvAlreadyExistsError: "כבר קיים שירות עם שם זה בתוך הארגון. אנא בחר שם אחר.",
				dataBtnClose: "בטל את הסיור",
				dataBtnSave: "צור שירות",
				dataFooterProgress: "היצירה בתהליך",
				dataFooterSucceed: "היצירה הסתיימה בהצלחה, טוען",
				dataFooterError: "היצירה נכשלה, אנא נסה שוב",
				tabError: "אנא בדוק שגיאות בכל הלשוניות",
				introRecordBtn: "הקדמה",
				introRecordActivate: "השתמש בנקודה הראשונה כהקדמה"
			},
			addPopupJS: {
				uploadingPicture: "טוען תמונה",
				uploadSuccess: "טעינה הסתיימה בהצלחה",
				uploadError: "שגיאה בטעינת תמונה",
				notJpg: "אנא בחר את תמונת ה- jpeg לטעינה",
				errorNoPhoto: "בחר תמונה להעלות",
				errorNoThumbnail: "בחר תמונה ממוזערת להעלות",
				errorNoName: "הכנס שם עבור נקודת סיור זו",
				errorNoDescription: "הכנס כותרת משנה עבור נקודת סיור זו",
				errorNoLocation: "קבע את המיקום של נקודת סיור זו"
			},
			builderJS: {
				noPendingChange: "אין שינוי לביצוע",
				unSavedChangeSingular: "שינוי אחד שלא נשמר",
				unSavedChangePlural: "שינויים שלא נשמרו",
				popoverDiscard: "האם אתה בטוח שברצונך להיפטר מכל השינויים שלא נשמרו?",
				yes: "כן",
				no: "לא",
				popoverLoseSave: "על ידי פתיחת החלון, תאבד את כל השינויים שלא נשמרו",
				ok: "אישור",
				popoverSaveWhenDone: "אל תשכח לשמור ברגע שתסיים",
				closeWithPendingChange: "האם הינך בטוח שברצונך לאשר פעולה זו? אתה עלול לאבד את השינויים שביצעת",
				gotIt: "אישור",
				savingApplication: "שמירת אפליקציה",
				saveSuccess: "שמירת אפליקציה בוצעה בהצלחה",
				saveError: "שמירה נכשלה, יש לנסות שוב",
				dragColorPicker: "הזז אותי סביב<br />או שנה את הצבע שלי",
				dataWarningExtent: "יש לך נתונים מחוץ לתיחום ה- web map. נתונים אלו לא יעובדו לכדי נקודות סיפור, שנה את תיחום המפה באם ברצונך להשתמש בהם.",
				dataWarningVisibi: "שכבת מפת הסיור שלך כבויה בתיחום ה- web map הנוכחי. הדלק את שכבת מפת הסיור שלך באמצעות %MAPSIZE% מפה גדולה.",
				dataWarningEdit: "ערוך web map",
				dataWarningClose: "סגור",
				signIn: "אנא התחבר עם חשבון ב",
				signInTwo: "כדי לשמור את האפליקציה."
			},
			organizePopupJS: {
				messageStart: "בחרת למחוק",
				messageSinglePoint: "נקודת סיור אחת",
				messageMultiPoint: "נקודות סיור",
				messagePermantRemove: "פעולה זו תסיר באופן קבוע את",
				messageRecord: "רשומה",
				messageRecordPlural: "רשומות",
				messageConfirm: "מבסיס הנתונים שלך. האם ברצונך להמשיך?",
				labelButtonShow: "הצג",
				labelButtonHide: "הסתר"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "This will permanently delete the picture and thumbnail",
				popoverDeleteWarningThumb: "This will permanently delete the thumbnail",
				popoverUploadingPhoto: "טוען תמונה ותמונה ממוזערת",
				popoverUploadingThumbnail: "טוען תמונה ממוזערת",
				popoverUploadSuccessful: "טעינה הסתיימה בהצלחה",
				popoverUploadError: "טעינה נכשלה, אנא נסה שוב",
				changePicAndThumb: "שנה תמונה",
				changeThumb: "שנה תמונה ממוזערת",
				selectPic: "שנה תמונה",
				selectThumb: "שנה תמונה ממוזערת",
				uploadPicAndThumb: "בצע"
			},
			headerJS:{
				editMe: "ערוך אותי !",
				templateTitle: "קבע כותרת תבנית",
				templateSubtitle: "קבע כותרת משנה לתבנית"
			},
			crossFaderJS:{
				setPicture: "קבע כותרת לתמונה",
				setCaption: "הכנס תיאור תמונה"
			}
        }
    })
);
