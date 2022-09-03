/* let ankaraMahkemeler = document.getElementById("ankara-mahkemeler");
let agirCeza = document.getElementById("agir-ceza");
let asliyeCeza = document.getElementById("asliye-ceza");
let sulhCeza = document.getElementById("sulh-ceza");
let asliyeHukuk = document.getElementById("asliye-hukuk");
let is = document.getElementById("is");
let icra = document.getElementById("icra");
let aile = document.getElementById("aile");
let cocuk = document.getElementById("cocuk");
let cocukAgirCeza = document.getElementById("cocuk-agir-ceza");
let ticaret = document.getElementById("ticaret");
let tuketici = document.getElementById("tuketici");
let fikriVeSinai = document.getElementById("fikri-ve-sinai");
*/

function populate (s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";

  if (s1.value == "agir-ceza") {
    var optionArray = ["|","1|1. Ağır Ceza Mahkemesi","2|2. Ağır Ceza Mahkemesi","3|3. Ağır Ceza Mahkemesi","4|4. Ağır Ceza Mahkemesi","5|5. Ağır Ceza Mahkemesi","6|6. Ağır Ceza Mahkemesi","7|7. Ağır Ceza Mahkemesi","8|8. Ağır Ceza Mahkemesi","9|9. Ağır Ceza Mahkemesi","10|10. Ağır Ceza Mahkemesi","11|11. Ağır Ceza Mahkemesi","12|12. Ağır Ceza Mahkemesi", "13|13. Ağır Ceza Mahkemesi","14|14. Ağır Ceza Mahkemesi","15|15. Ağır Ceza Mahkemesi","16|16. Ağır Ceza Mahkemesi","17|17. Ağır Ceza Mahkemesi","18|18. Ağır Ceza Mahkemesi","19|19. Ağır Ceza Mahkemesi","20|20. Ağır Ceza Mahkemesi","21|21. Ağır Ceza Mahkemesi","22|22. Ağır Ceza Mahkemesi","23|23. Ağır Ceza Mahkemesi","24|24. Ağır Ceza Mahkemesi","25|25. Ağır Ceza Mahkemesi","26|26. Ağır Ceza Mahkemesi","27|27. Ağır Ceza Mahkemesi","28|28. Ağır Ceza Mahkemesi","29|29. Ağır Ceza Mahkemesi","30|30. Ağır Ceza Mahkemesi","31|31. Ağır Ceza Mahkemesi","32|32. Ağır Ceza Mahkemesi","33|33. Ağır Ceza Mahkemesi","34|34. Ağır Ceza Mahkemesi","35|35. Ağır Ceza Mahkemesi","36|36. Ağır Ceza Mahkemesi","37|37. Ağır Ceza Mahkemesi"]; 
  } else if (s1.value == "sulh-ceza"){ 
    var optionArray = ["|","61|1. Sulh Ceza Hakimliği","62|2. Sulh Ceza Hakimliği","63|3. Sulh Ceza Hakimliği","64|4. Sulh Ceza Hakimliği","65|5. Sulh Ceza Hakimliği","66|6. Sulh Ceza Hakimliği","67|7. Sulh Ceza Hakimliği","68|8. Sulh Ceza Hakimliği"];
  } else if (s1.value == "cocuk"){ 
    var optionArray = ["|","81|1. Çocuk Mahkemesi","82|2. Çocuk Mahkemesi","83|3. Çocuk Mahkemesi","84|4. Çocuk Mahkemesi","85|5. Çocuk Mahkemesi"];
  } else if (s1.value == "cocuk-agir-ceza"){ 
    var optionArray = ["|","91|1. Çocuk Ağır Ceza Mahkemesi",];
  } else if (s1.value == "asliye-ceza"){ 
    var optionArray = ["|","101|1. Asliye Ceza Mahkemesi","102|2. Asliye Ceza Mahkemesi","103|3. Asliye Ceza Mahkemesi","104|4. Asliye Ceza Mahkemesi","105|5. Asliye Ceza Mahkemesi","106|6. Asliye Ceza Mahkemesi","107|7. Asliye Ceza Mahkemesi","108|8. Asliye Ceza Mahkemesi","109|9. Asliye Ceza Mahkemesi","110|10. Asliye Ceza Mahkemesi","111|11. Asliye Ceza Mahkemesi","112|12. Asliye Ceza Mahkemesi","113|13. Asliye Ceza Mahkemesi","114|14. Asliye Ceza Mahkemesi","115|15. Asliye Ceza Mahkemesi","116|16. Asliye Ceza Mahkemesi","117|17. Asliye Ceza Mahkemesi","118|18. Asliye Ceza Mahkemesi","119|19. Asliye Ceza Mahkemesi","120|20. Asliye Ceza Mahkemesi","121|21. Asliye Ceza Mahkemesi","122|22. Asliye Ceza Mahkemesi","123|23. Asliye Ceza Mahkemesi","124|24. Asliye Ceza Mahkemesi","125|25. Asliye Ceza Mahkemesi","126|26. Asliye Ceza Mahkemesi","127|27. Asliye Ceza Mahkemesi","128|28. Asliye Ceza Mahkemesi","129|29. Asliye Ceza Mahkemesi","130|30. Asliye Ceza Mahkemesi","131|31. Asliye Ceza Mahkemesi","132|32. Asliye Ceza Mahkemesi","133|33. Asliye Ceza Mahkemesi","134|34. Asliye Ceza Mahkemesi","135|35. Asliye Ceza Mahkemesi","136|36. Asliye Ceza Mahkemesi","137|37. Asliye Ceza Mahkemesi","138|38. Asliye Ceza Mahkemesi","139|39. Asliye Ceza Mahkemesi","140|40. Asliye Ceza Mahkemesi","141|41. Asliye Ceza Mahkemesi","142|42. Asliye Ceza Mahkemesi","143|43. Asliye Ceza Mahkemesi","144|44. Asliye Ceza Mahkemesi","145|45. Asliye Ceza Mahkemesi","146|46. Asliye Ceza Mahkemesi","147|47. Asliye Ceza Mahkemesi","148|48. Asliye Ceza Mahkemesi","149|49. Asliye Ceza Mahkemesi","150|50. Asliye Ceza Mahkemesi","151|51. Asliye Ceza Mahkemesi","152|52. Asliye Ceza Mahkemesi","153|53. Asliye Ceza Mahkemesi","154|54. Asliye Ceza Mahkemesi","155|55. Asliye Ceza Mahkemesi","156|56. Asliye Ceza Mahkemesi","157|57. Asliye Ceza Mahkemesi","158|58. Asliye Ceza Mahkemesi","159|59. Asliye Ceza Mahkemesi","160|60. Asliye Ceza Mahkemesi","161|61. Asliye Ceza Mahkemesi","162|62. Asliye Ceza Mahkemesi","163|63. Asliye Ceza Mahkemesi","164|64. Asliye Ceza Mahkemesi","165|65. Asliye Ceza Mahkemesi","166|66. Asliye Ceza Mahkemesi","167|67. Asliye Ceza Mahkemesi","168|68. Asliye Ceza Mahkemesi","169|69. Asliye Ceza Mahkemesi","170|70. Asliye Ceza Mahkemesi","171|71. Asliye Ceza Mahkemesi","172|72. Asliye Ceza Mahkemesi","173|73. Asliye Ceza Mahkemesi","174|74. Asliye Ceza Mahkemesi","175|75. Asliye Ceza Mahkemesi"];
  } else if (s1.value == "asliye-hukuk"){ 
    var optionArray = ["|","201|1. Asliye Hukuk Mahkemesi","202|2. Asliye Hukuk Mahkemesi","203|3. Asliye Hukuk Mahkemesi","204|4. Asliye Hukuk Mahkemesi","205|5. Asliye Hukuk Mahkemesi","206|6. Asliye Hukuk Mahkemesi","207|7. Asliye Hukuk Mahkemesi","208|8. Asliye Hukuk Mahkemesi","209|9. Asliye Hukuk Mahkemesi","210|10. Asliye Hukuk Mahkemesi","211|11. Asliye Hukuk Mahkemesi","212|12. Asliye Hukuk Mahkemesi","213|13. Asliye Hukuk Mahkemesi","214|14. Asliye Hukuk Mahkemesi","215|15. Asliye Hukuk Mahkemesi","216|16. Asliye Hukuk Mahkemesi","217|17. Asliye Hukuk Mahkemesi","218|18. Asliye Hukuk Mahkemesi","219|19. Asliye Hukuk Mahkemesi","220|20. Asliye Hukuk Mahkemesi","221|21. Asliye Hukuk Mahkemesi","222|22. Asliye Hukuk Mahkemesi","223|23. Asliye Hukuk Mahkemesi","224|24. Asliye Hukuk Mahkemesi","225|25. Asliye Hukuk Mahkemesi","226|26. Asliye Hukuk Mahkemesi","227|27. Asliye Hukuk Mahkemesi","228|28. Asliye Hukuk Mahkemesi","229|29. Asliye Hukuk Mahkemesi","230|30. Asliye Hukuk Mahkemesi","231|31. Asliye Hukuk Mahkemesi","232|32. Asliye Hukuk Mahkemesi","233|33. Asliye Hukuk Mahkemesi","234|34. Asliye Hukuk Mahkemesi","235|35. Asliye Hukuk Mahkemesi","236|36. Asliye Hukuk Mahkemesi","237|37. Asliye Hukuk Mahkemesi","238|38. Asliye Hukuk Mahkemesi","239|39. Asliye Hukuk Mahkemesi","240|40. Asliye Hukuk Mahkemesi","241|41. Asliye Hukuk Mahkemesi","242|42. Asliye Hukuk Mahkemesi","243|43. Asliye Hukuk Mahkemesi","244|44. Asliye Hukuk Mahkemesi","245|45. Asliye Hukuk Mahkemesi","246|46. Asliye Hukuk Mahkemesi"];
  } else if (s1.value == "sulh-hukuk"){ 
    var optionArray = ["|","251|1. Sulh Hukuk Mahkemesi","252|2. Sulh Hukuk Mahkemesi","253|3. Sulh Hukuk Mahkemesi","254|4. Sulh Hukuk Mahkemesi","255|5. Sulh Hukuk Mahkemesi","256|6. Sulh Hukuk Mahkemesi","257|7. Sulh Hukuk Mahkemesi","258|8. Sulh Hukuk Mahkemesi","259|9. Sulh Hukuk Mahkemesi","260|10. Sulh Hukuk Mahkemesi","261|11. Sulh Hukuk Mahkemesi","262|12. Sulh Hukuk Mahkemesi","263|13. Sulh Hukuk Mahkemesi","264|14. Sulh Hukuk Mahkemesi"];
  } else if (s1.value == "fikri-ve-sinai"){ 
    var optionArray = ["|","281|1. Fikri ve Sınai Haklar Mahkemesi","282|2. Fikri ve Sınai Haklar Mahkemesi","283|3. Fikri ve Sınai Haklar Mahkemesi","284|4. Fikri ve Sınai Haklar Mahkemesi","285|5. Fikri ve Sınai Haklar Mahkemesi"];
  } else if (s1.value == "fikri-ve-sinai"){ 
    var optionArray = ["|","281|1. Fikri ve Sınai Haklar Mahkemesi","282|2. Fikri ve Sınai Haklar Mahkemesi","283|3. Fikri ve Sınai Haklar Mahkemesi","284|4. Fikri ve Sınai Haklar Mahkemesi","285|5. Fikri ve Sınai Haklar Mahkemesi"];
  } else if (s1.value == "is"){ 
    var optionArray = ["|","301|1. İş Mahkemesi","302|2. İş Mahkemesi","303|3. İş Mahkemesi","304|4. İş Mahkemesi","305|5. İş Mahkemesi","306|6. İş Mahkemesi","307|7. İş Mahkemesi","308|8. İş Mahkemesi","309|9. İş Mahkemesi","310|10. İş Mahkemesi","311|11. İş Mahkemesi","312|12. İş Mahkemesi","313|13. İş Mahkemesi","314|14. İş Mahkemesi","315|15. İş Mahkemesi","316|16. İş Mahkemesi","317|17. İş Mahkemesi","318|18. İş Mahkemesi","319|19. İş Mahkemesi","320|20. İş Mahkemesi","321|21. İş Mahkemesi","322|22. İş Mahkemesi","323|23. İş Mahkemesi","324|24. İş Mahkemesi","325|25. İş Mahkemesi","326|26. İş Mahkemesi","327|27. İş Mahkemesi","328|28. İş Mahkemesi","329|29. İş Mahkemesi","330|30. İş Mahkemesi","331|31. İş Mahkemesi","332|32. İş Mahkemesi","333|33. İş Mahkemesi","334|34. İş Mahkemesi","335|35. İş Mahkemesi","336|36. İş Mahkemesi","337|37. İş Mahkemesi","338|38. İş Mahkemesi","339|39. İş Mahkemesi","340|40. İş Mahkemesi","341|41. İş Mahkemesi","342|42. İş Mahkemesi","343|43. İş Mahkemesi","344|44. İş Mahkemesi","345|45. İş Mahkemesi","346|46. İş Mahkemesi","347|47. İş Mahkemesi","384|48. İş Mahkemesi","349|49. İş Mahkemesi","350|50. İş Mahkemesi","351|51. İş Mahkemesi","352|52. İş Mahkemesi","353|53. İş Mahkemesi","354|54. İş Mahkemesi","355|55. İş Mahkemesi","356|56. İş Mahkemesi","357|57. İş Mahkemesi","358|58. İş Mahkemesi","359|59. İş Mahkemesi","360|60. İş Mahkemesi","361|61. İş Mahkemesi","362|62. İş Mahkemesi","363|63. İş Mahkemesi","364|64. İş Mahkemesi","365|65. İş Mahkemesi","366|66. İş Mahkemesi","367|67. İş Mahkemesi", "368|68. İş Mahkemesi"];
  } else if (s1.value == "tuketici"){ 
    var optionArray = ["|","381|1. Tüketici Mahkemesi","382|2. Tüketici Mahkemesi","383|3. Tüketici Mahkemesi","384|4. Tüketici Mahkemesi","385|5. Tüketici Mahkemesi","386|6. Tüketici Mahkemesi","387|7. Tüketici Mahkemesi","388|8. Tüketici Mahkemesi","389|9. Tüketici Mahkemesi","390|10. Tüketici Mahkemesi","391|11. Tüketici Mahkemesi","392|12. Tüketici Mahkemesi","393|13. Tüketici Mahkemesi","394|14. Tüketici Mahkemesi"];
  } else if (s1.value == "aile"){ 
    var optionArray = ["|","401|1. Aile Mahkemesi","402|2. Aile Mahkemesi","403|3. Aile Mahkemesi","404|4. Aile Mahkemesi","405|5. Aile Mahkemesi","406|6. Aile Mahkemesi","407|7. Aile Mahkemesi","408|8. Aile Mahkemesi","409|9. Aile Mahkemesi","410|10. Aile Mahkemesi","411|11. Aile Mahkemesi","412|12. Aile Mahkemesi","413|13. Aile Mahkemesi","414|14. Aile Mahkemesi","415|15. Aile Mahkemesi","416|16. Aile Mahkemesi","417|17. Aile Mahkemesi","418|18. Aile Mahkemesi","419|19. Aile Mahkemesi","420|20. Aile Mahkemesi","421|21. Aile Mahkemesi","422|22. Aile Mahkemesi","423|23. Aile Mahkemesi","424|24. Aile Mahkemesi","425|25. Aile Mahkemesi","426|26. Aile Mahkemesi","427|27. Aile Mahkemesi","428|28. Aile Mahkemesi","429|29. Aile Mahkemesi","430|30. Aile Mahkemesi"];
  } else if (s1.value == "ticaret"){ 
    var optionArray = ["|","451|1. Asliye Ticaret Mahkemesi","452|2. Asliye Ticaret Mahkemesi","453|3. Asliye Ticaret Mahkemesi","454|4. Asliye Ticaret Mahkemesi","455|5. Asliye Ticaret Mahkemesi","456|6. Asliye Ticaret Mahkemesi","457|7. Asliye Ticaret Mahkemesi","458|8. Asliye Ticaret Mahkemesi","459|9. Asliye Ticaret Mahkemesi","460|10. Asliye Ticaret Mahkemesi","461|11. Asliye Ticaret Mahkemesi","462|12. Asliye Ticaret Mahkemesi","463|13. Asliye Ticaret Mahkemesi","464|14. Asliye Ticaret Mahkemesi"];
  }
  
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
}

let select = document.querySelector("select");
let divs = document.querySelectorAll(".divz");
let result = document.querySelector("#result");

function func1(par){
  result.innerHTML = divs[par - 1].innerHTML;
}