'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('countries',[{"id":244,"name":"Israel","code":"IL","dial_code":"+972"},{"id":245,"name":"Afghanistan","code":"AF","dial_code":"+93"},{"id":246,"name":"Albania","code":"AL","dial_code":"+355"},{"id":247,"name":"Algeria","code":"DZ","dial_code":"+213"},{"id":248,"name":"AmericanSamoa","code":"AS","dial_code":"+1 684"},{"id":249,"name":"Andorra","code":"AD","dial_code":"+376"},{"id":250,"name":"Angola","code":"AO","dial_code":"+244"},{"id":251,"name":"Anguilla","code":"AI","dial_code":"+1 264"},{"id":252,"name":"Antigua and Barbuda","code":"AG","dial_code":"+1268"},{"id":253,"name":"Argentina","code":"AR","dial_code":"+54"},{"id":254,"name":"Armenia","code":"AM","dial_code":"+374"},{"id":255,"name":"Aruba","code":"AW","dial_code":"+297"},{"id":256,"name":"Australia","code":"AU","dial_code":"+61"},{"id":257,"name":"Austria","code":"AT","dial_code":"+43"},{"id":258,"name":"Azerbaijan","code":"AZ","dial_code":"+994"},{"id":259,"name":"Bahamas","code":"BS","dial_code":"+1 242"},{"id":260,"name":"Bahrain","code":"BH","dial_code":"+973"},{"id":261,"name":"Bangladesh","code":"BD","dial_code":"+880"},{"id":262,"name":"Barbados","code":"BB","dial_code":"+1 246"},{"id":263,"name":"Belarus","code":"BY","dial_code":"+375"},{"id":264,"name":"Belgium","code":"BE","dial_code":"+32"},{"id":265,"name":"Belize","code":"BZ","dial_code":"+501"},{"id":266,"name":"Benin","code":"BJ","dial_code":"+229"},{"id":267,"name":"Bermuda","code":"BM","dial_code":"+1 441"},{"id":268,"name":"Bhutan","code":"BT","dial_code":"+975"},{"id":269,"name":"Bosnia and Herzegovina","code":"BA","dial_code":"+387"},{"id":270,"name":"Botswana","code":"BW","dial_code":"+267"},{"id":271,"name":"Brazil","code":"BR","dial_code":"+55"},{"id":272,"name":"British Indian Ocean Territory","code":"IO","dial_code":"+246"},{"id":273,"name":"Bulgaria","code":"BG","dial_code":"+359"},{"id":274,"name":"Burkina Faso","code":"BF","dial_code":"+226"},{"id":275,"name":"Burundi","code":"BI","dial_code":"+257"},{"id":276,"name":"Cambodia","code":"KH","dial_code":"+855"},{"id":277,"name":"Cameroon","code":"CM","dial_code":"+237"},{"id":278,"name":"Canada","code":"CA","dial_code":"+1"},{"id":279,"name":"Cape Verde","code":"CV","dial_code":"+238"},{"id":280,"name":"Cayman Islands","code":"KY","dial_code":"+345"},{"id":281,"name":"Central African Republic","code":"CF","dial_code":"+236"},{"id":282,"name":"Chad","code":"TD","dial_code":"+235"},{"id":283,"name":"Chile","code":"CL","dial_code":"+56"},{"id":284,"name":"China","code":"CN","dial_code":"+86"},{"id":285,"name":"Christmas Island","code":"CX","dial_code":"+61"},{"id":286,"name":"Colombia","code":"CO","dial_code":"+57"},{"id":287,"name":"Comoros","code":"KM","dial_code":"+269"},{"id":288,"name":"Congo","code":"CG","dial_code":"+242"},{"id":289,"name":"Cook Islands","code":"CK","dial_code":"+682"},{"id":290,"name":"Costa Rica","code":"CR","dial_code":"+506"},{"id":291,"name":"Croatia","code":"HR","dial_code":"+385"},{"id":292,"name":"Cuba","code":"CU","dial_code":"+53"},{"id":293,"name":"Cyprus","code":"CY","dial_code":"+537"},{"id":294,"name":"Czech Republic","code":"CZ","dial_code":"+420"},{"id":295,"name":"Denmark","code":"DK","dial_code":"+45"},{"id":296,"name":"Djibouti","code":"DJ","dial_code":"+253"},{"id":297,"name":"Dominica","code":"DM","dial_code":"+1 767"},{"id":298,"name":"Dominican Republic","code":"DO","dial_code":"+1 849"},{"id":299,"name":"Ecuador","code":"EC","dial_code":"+593"},{"id":300,"name":"Egypt","code":"EG","dial_code":"+20"},{"id":301,"name":"El Salvador","code":"SV","dial_code":"+503"},{"id":302,"name":"Equatorial Guinea","code":"GQ","dial_code":"+240"},{"id":303,"name":"Eritrea","code":"ER","dial_code":"+291"},{"id":304,"name":"Estonia","code":"EE","dial_code":"+372"},{"id":305,"name":"Ethiopia","code":"ET","dial_code":"+251"},{"id":306,"name":"Faroe Islands","code":"FO","dial_code":"+298"},{"id":307,"name":"Fiji","code":"FJ","dial_code":"+679"},{"id":308,"name":"Finland","code":"FI","dial_code":"+358"},{"id":309,"name":"France","code":"FR","dial_code":"+33"},{"id":310,"name":"French Guiana","code":"GF","dial_code":"+594"},{"id":311,"name":"French Polynesia","code":"PF","dial_code":"+689"},{"id":312,"name":"Gabon","code":"GA","dial_code":"+241"},{"id":313,"name":"Gambia","code":"GM","dial_code":"+220"},{"id":314,"name":"Georgia","code":"GE","dial_code":"+995"},{"id":315,"name":"Germany","code":"DE","dial_code":"+49"},{"id":316,"name":"Ghana","code":"GH","dial_code":"+233"},{"id":317,"name":"Gibraltar","code":"GI","dial_code":"+350"},{"id":318,"name":"Greece","code":"GR","dial_code":"+30"},{"id":319,"name":"Greenland","code":"GL","dial_code":"+299"},{"id":320,"name":"Grenada","code":"GD","dial_code":"+1 473"},{"id":321,"name":"Guadeloupe","code":"GP","dial_code":"+590"},{"id":322,"name":"Guam","code":"GU","dial_code":"+1 671"},{"id":323,"name":"Guatemala","code":"GT","dial_code":"+502"},{"id":324,"name":"Guinea","code":"GN","dial_code":"+224"},{"id":325,"name":"Guinea-Bissau","code":"GW","dial_code":"+245"},{"id":326,"name":"Guyana","code":"GY","dial_code":"+595"},{"id":327,"name":"Haiti","code":"HT","dial_code":"+509"},{"id":328,"name":"Honduras","code":"HN","dial_code":"+504"},{"id":329,"name":"Hungary","code":"HU","dial_code":"+36"},{"id":330,"name":"Iceland","code":"IS","dial_code":"+354"},{"id":331,"name":"India","code":"IN","dial_code":"+91"},{"id":332,"name":"Indonesia","code":"ID","dial_code":"+62"},{"id":333,"name":"Iraq","code":"IQ","dial_code":"+964"},{"id":334,"name":"Ireland","code":"IE","dial_code":"+353"},{"id":335,"name":"Israel","code":"IL","dial_code":"+972"},{"id":336,"name":"Italy","code":"IT","dial_code":"+39"},{"id":337,"name":"Jamaica","code":"JM","dial_code":"+1 876"},{"id":338,"name":"Japan","code":"JP","dial_code":"+81"},{"id":339,"name":"Jordan","code":"JO","dial_code":"+962"},{"id":340,"name":"Kazakhstan","code":"KZ","dial_code":"+7 7"},{"id":341,"name":"Kenya","code":"KE","dial_code":"+254"},{"id":342,"name":"Kiribati","code":"KI","dial_code":"+686"},{"id":343,"name":"Kuwait","code":"KW","dial_code":"+965"},{"id":344,"name":"Kyrgyzstan","code":"KG","dial_code":"+996"},{"id":345,"name":"Latvia","code":"LV","dial_code":"+371"},{"id":346,"name":"Lebanon","code":"LB","dial_code":"+961"},{"id":347,"name":"Lesotho","code":"LS","dial_code":"+266"},{"id":348,"name":"Liberia","code":"LR","dial_code":"+231"},{"id":349,"name":"Liechtenstein","code":"LI","dial_code":"+423"},{"id":350,"name":"Lithuania","code":"LT","dial_code":"+370"},{"id":351,"name":"Luxembourg","code":"LU","dial_code":"+352"},{"id":352,"name":"Madagascar","code":"MG","dial_code":"+261"},{"id":353,"name":"Malawi","code":"MW","dial_code":"+265"},{"id":354,"name":"Malaysia","code":"MY","dial_code":"+60"},{"id":355,"name":"Maldives","code":"MV","dial_code":"+960"},{"id":356,"name":"Mali","code":"ML","dial_code":"+223"},{"id":357,"name":"Malta","code":"MT","dial_code":"+356"},{"id":358,"name":"Marshall Islands","code":"MH","dial_code":"+692"},{"id":359,"name":"Martinique","code":"MQ","dial_code":"+596"},{"id":360,"name":"Mauritania","code":"MR","dial_code":"+222"},{"id":361,"name":"Mauritius","code":"MU","dial_code":"+230"},{"id":362,"name":"Mayotte","code":"YT","dial_code":"+262"},{"id":363,"name":"Mexico","code":"MX","dial_code":"+52"},{"id":364,"name":"Monaco","code":"MC","dial_code":"+377"},{"id":365,"name":"Mongolia","code":"MN","dial_code":"+976"},{"id":366,"name":"Montenegro","code":"ME","dial_code":"+382"},{"id":367,"name":"Montserrat","code":"MS","dial_code":"+1664"},{"id":368,"name":"Morocco","code":"MA","dial_code":"+212"},{"id":369,"name":"Myanmar","code":"MM","dial_code":"+95"},{"id":370,"name":"Namibia","code":"NA","dial_code":"+264"},{"id":371,"name":"Nauru","code":"NR","dial_code":"+674"},{"id":372,"name":"Nepal","code":"NP","dial_code":"+977"},{"id":373,"name":"Netherlands","code":"NL","dial_code":"+31"},{"id":374,"name":"Netherlands Antilles","code":"AN","dial_code":"+599"},{"id":375,"name":"New Caledonia","code":"NC","dial_code":"+687"},{"id":376,"name":"New Zealand","code":"NZ","dial_code":"+64"},{"id":377,"name":"Nicaragua","code":"NI","dial_code":"+505"},{"id":378,"name":"Niger","code":"NE","dial_code":"+227"},{"id":379,"name":"Nigeria","code":"NG","dial_code":"+234"},{"id":380,"name":"Niue","code":"NU","dial_code":"+683"},{"id":381,"name":"Norfolk Island","code":"NF","dial_code":"+672"},{"id":382,"name":"Northern Mariana Islands","code":"MP","dial_code":"+1 670"},{"id":383,"name":"Norway","code":"NO","dial_code":"+47"},{"id":384,"name":"Oman","code":"OM","dial_code":"+968"},{"id":385,"name":"Pakistan","code":"PK","dial_code":"+92"},{"id":386,"name":"Palau","code":"PW","dial_code":"+680"},{"id":387,"name":"Panama","code":"PA","dial_code":"+507"},{"id":388,"name":"Papua New Guinea","code":"PG","dial_code":"+675"},{"id":389,"name":"Paraguay","code":"PY","dial_code":"+595"},{"id":390,"name":"Peru","code":"PE","dial_code":"+51"},{"id":391,"name":"Philippines","code":"PH","dial_code":"+63"},{"id":392,"name":"Poland","code":"PL","dial_code":"+48"},{"id":393,"name":"Portugal","code":"PT","dial_code":"+351"},{"id":394,"name":"Puerto Rico","code":"PR","dial_code":"+1 939"},{"id":395,"name":"Qatar","code":"QA","dial_code":"+974"},{"id":396,"name":"Romania","code":"RO","dial_code":"+40"},{"id":397,"name":"Rwanda","code":"RW","dial_code":"+250"},{"id":398,"name":"Samoa","code":"WS","dial_code":"+685"},{"id":399,"name":"San Marino","code":"SM","dial_code":"+378"},{"id":400,"name":"Saudi Arabia","code":"SA","dial_code":"+966"},{"id":401,"name":"Senegal","code":"SN","dial_code":"+221"},{"id":402,"name":"Serbia","code":"RS","dial_code":"+381"},{"id":403,"name":"Seychelles","code":"SC","dial_code":"+248"},{"id":404,"name":"Sierra Leone","code":"SL","dial_code":"+232"},{"id":405,"name":"Singapore","code":"SG","dial_code":"+65"},{"id":406,"name":"Slovakia","code":"SK","dial_code":"+421"},{"id":407,"name":"Slovenia","code":"SI","dial_code":"+386"},{"id":408,"name":"Solomon Islands","code":"SB","dial_code":"+677"},{"id":409,"name":"South Africa","code":"ZA","dial_code":"+27"},{"id":410,"name":"South Georgia and the South Sandwich Islands","code":"GS","dial_code":"+500"},{"id":411,"name":"Spain","code":"ES","dial_code":"+34"},{"id":412,"name":"Sri Lanka","code":"LK","dial_code":"+94"},{"id":413,"name":"Sudan","code":"SD","dial_code":"+249"},{"id":414,"name":"Suriname","code":"SR","dial_code":"+597"},{"id":415,"name":"Swaziland","code":"SZ","dial_code":"+268"},{"id":416,"name":"Sweden","code":"SE","dial_code":"+46"},{"id":417,"name":"Switzerland","code":"CH","dial_code":"+41"},{"id":418,"name":"Tajikistan","code":"TJ","dial_code":"+992"},{"id":419,"name":"Thailand","code":"TH","dial_code":"+66"},{"id":420,"name":"Togo","code":"TG","dial_code":"+228"},{"id":421,"name":"Tokelau","code":"TK","dial_code":"+690"},{"id":422,"name":"Tonga","code":"TO","dial_code":"+676"},{"id":423,"name":"Trinidad and Tobago","code":"TT","dial_code":"+1 868"},{"id":424,"name":"Tunisia","code":"TN","dial_code":"+216"},{"id":425,"name":"Turkey","code":"TR","dial_code":"+90"},{"id":426,"name":"Turkmenistan","code":"TM","dial_code":"+993"},{"id":427,"name":"Turks and Caicos Islands","code":"TC","dial_code":"+1 649"},{"id":428,"name":"Tuvalu","code":"TV","dial_code":"+688"},{"id":429,"name":"Uganda","code":"UG","dial_code":"+256"},{"id":430,"name":"Ukraine","code":"UA","dial_code":"+380"},{"id":431,"name":"United Arab Emirates","code":"AE","dial_code":"+971"},{"id":432,"name":"United Kingdom","code":"GB","dial_code":"+44"},{"id":433,"name":"United States","code":"US","dial_code":"+1"},{"id":434,"name":"Uruguay","code":"UY","dial_code":"+598"},{"id":435,"name":"Uzbekistan","code":"UZ","dial_code":"+998"},{"id":436,"name":"Vanuatu","code":"VU","dial_code":"+678"},{"id":437,"name":"Wallis and Futuna","code":"WF","dial_code":"+681"},{"id":438,"name":"Yemen","code":"YE","dial_code":"+967"},{"id":439,"name":"Zambia","code":"ZM","dial_code":"+260"},{"id":440,"name":"Zimbabwe","code":"ZW","dial_code":"+263"},{"id":443,"name":"Bolivia, Plurinational State of","code":"BO","dial_code":"+591"},{"id":444,"name":"Brunei Darussalam","code":"BN","dial_code":"+673"},{"id":445,"name":"Cocos (Keeling) Islands","code":"CC","dial_code":"+61"},{"id":446,"name":"Congo, The Democratic Republic of the","code":"CD","dial_code":"+243"},{"id":447,"name":"Cote d'Ivoire","code":"CI","dial_code":"+225"},{"id":448,"name":"Falkland Islands (Malvinas)","code":"FK","dial_code":"+500"},{"id":449,"name":"Guernsey","code":"GG","dial_code":"+44"},{"id":450,"name":"Holy See (Vatican City State)","code":"VA","dial_code":"+379"},{"id":451,"name":"Hong Kong","code":"HK","dial_code":"+852"},{"id":452,"name":"Iran, Islamic Republic of","code":"IR","dial_code":"+98"},{"id":453,"name":"Isle of Man","code":"IM","dial_code":"+44"},{"id":454,"name":"Jersey","code":"JE","dial_code":"+44"},{"id":455,"name":"Korea, Democratic People's Republic of","code":"KP","dial_code":"+850"},{"id":456,"name":"Korea, Republic of","code":"KR","dial_code":"+82"},{"id":457,"name":"Lao People's Democratic Republic","code":"LA","dial_code":"+856"},{"id":458,"name":"Libyan Arab Jamahiriya","code":"LY","dial_code":"+218"},{"id":459,"name":"Macao","code":"MO","dial_code":"+853"},{"id":460,"name":"Macedonia, The Former Yugoslav Republic of","code":"MK","dial_code":"+389"},{"id":461,"name":"Micronesia, Federated States of","code":"FM","dial_code":"+691"},{"id":462,"name":"Moldova, Republic of","code":"MD","dial_code":"+373"},{"id":463,"name":"Mozambique","code":"MZ","dial_code":"+258"},{"id":464,"name":"Palestinian Territory, Occupied","code":"PS","dial_code":"+970"},{"id":465,"name":"Pitcairn","code":"PN","dial_code":"+872"},{"id":466,"name":"Réunion","code":"RE","dial_code":"+262"},{"id":467,"name":"Russia","code":"RU","dial_code":"+7"},{"id":468,"name":"Saint Barthélemy","code":"BL","dial_code":"+590"},{"id":469,"name":"Saint Helena, Ascension and Tristan Da Cunha","code":"SH","dial_code":"+290"},{"id":470,"name":"Saint Kitts and Nevis","code":"KN","dial_code":"+1 869"},{"id":471,"name":"Saint Lucia","code":"LC","dial_code":"+1 758"},{"id":472,"name":"Saint Martin","code":"MF","dial_code":"+590"},{"id":473,"name":"Saint Pierre and Miquelon","code":"PM","dial_code":"+508"},{"id":474,"name":"Saint Vincent and the Grenadines","code":"VC","dial_code":"+1 784"},{"id":475,"name":"Sao Tome and Principe","code":"ST","dial_code":"+239"},{"id":476,"name":"Somalia","code":"SO","dial_code":"+252"},{"id":477,"name":"Svalbard and Jan Mayen","code":"SJ","dial_code":"+47"},{"id":478,"name":"Syrian Arab Republic","code":"SY","dial_code":"+963"},{"id":479,"name":"Taiwan, Province of China","code":"TW","dial_code":"+886"},{"id":480,"name":"Tanzania, United Republic of","code":"TZ","dial_code":"+255"},{"id":481,"name":"Timor-Leste","code":"TL","dial_code":"+670"},{"id":482,"name":"Venezuela, Bolivarian Republic of","code":"VE","dial_code":"+58"},{"id":483,"name":"Viet Nam","code":"VN","dial_code":"+84"},{"id":484,"name":"Virgin Islands, British","code":"VG","dial_code":"+1 284"},{"id":485,"name":"Virgin Islands, U.S.","code":"VI","dial_code":"+1 340"}],{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('countries', null, {});
  }
};
