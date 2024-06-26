import { forwardRef } from "react";
import "./Search.css";

const Search = ({ setCity, city }, ref) => {
  return (
    <div className="search">
      <span className="icon">🔍</span>
      <input
        type="text"
        ref={ref}
        value={city}
        list="cityName"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for cities"
      />
      <datalist id="cityName">
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Surat">Surat</option>
        <option value="Pune">Pune</option>
        <option value="Jaipur">Jaipur</option>
        <option value="Lucknow">Lucknow</option>
        <option value="Kanpur">Kanpur</option>
        <option value="Nagpur">Nagpur</option>
        <option value="Indore">Indore</option>
        <option value="Thane">Thane</option>
        <option value="Bhopal">Bhopal</option>
        <option value="Visakhapatnam">Visakhapatnam</option>
        <option value="Pimpri-Chinchwad">Pimpri-Chinchwad</option>
        <option value="Patna">Patna</option>
        <option value="Vadodara">Vadodara</option>
        <option value="Ghaziabad">Ghaziabad</option>
        <option value="Ludhiana">Ludhiana</option>
        <option value="Agra">Agra</option>
        <option value="Nashik">Nashik</option>
        <option value="Faridabad">Faridabad</option>
        <option value="Meerut">Meerut</option>
        <option value="Rajkot">Rajkot</option>
        <option value="Kalyan-Dombivli">Kalyan-Dombivli</option>
        <option value="Vasai-Virar">Vasai-Virar</option>
        <option value="Varanasi">Varanasi</option>
        <option value="Srinagar">Srinagar</option>
        <option value="Aurangabad">Aurangabad</option>
        <option value="Dhanbad">Dhanbad</option>
        <option value="Amritsar">Amritsar</option>
        <option value="Navi Mumbai">Navi Mumbai</option>
        <option value="Allahabad">Allahabad</option>
        <option value="Ranchi">Ranchi</option>
        <option value="Howrah">Howrah</option>
        <option value="Coimbatore">Coimbatore</option>
        <option value="Jabalpur">Jabalpur</option>
        <option value="Gwalior">Gwalior</option>
        <option value="Vijayawada">Vijayawada</option>
        <option value="Jodhpur">Jodhpur</option>
        <option value="Madurai">Madurai</option>
        <option value="Raipur">Raipur</option>
        <option value="Kota">Kota</option>
        <option value="Guwahati">Guwahati</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Solapur">Solapur</option>
        <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
        <option value="Bareilly">Bareilly</option>
        <option value="Mysore">Mysore</option>
        <option value="Tiruchirappalli">Tiruchirappalli</option>
        <option value="Tiruppur">Tiruppur</option>
        <option value="Moradabad">Moradabad</option>
        <option value="Salem">Salem</option>
        <option value="Aligarh">Aligarh</option>
        <option value="Gurgaon">Gurgaon</option>
        <option value="Bhubaneswar">Bhubaneswar</option>
        <option value="Bhiwandi">Bhiwandi</option>
        <option value="Saharanpur">Saharanpur</option>
        <option value="Gorakhpur">Gorakhpur</option>
        <option value="Guntur">Guntur</option>
        <option value="Bikaner">Bikaner</option>
        <option value="Amravati">Amravati</option>
        <option value="Noida">Noida</option>
        <option value="Jamshedpur">Jamshedpur</option>
        <option value="Bhilai">Bhilai</option>
        <option value="Cuttack">Cuttack</option>
        <option value="Firozabad">Firozabad</option>
        <option value="Kochi">Kochi</option>
        <option value="Bhavnagar">Bhavnagar</option>
        <option value="Dehradun">Dehradun</option>
        <option value="Durgapur">Durgapur</option>
        <option value="Asansol">Asansol</option>
        <option value="Nanded">Nanded</option>
        <option value="Kolhapur">Kolhapur</option>
        <option value="Ajmer">Ajmer</option>
        <option value="Gulbarga">Gulbarga</option>
        <option value="Jamnagar">Jamnagar</option>
        <option value="Ujjain">Ujjain</option>
        <option value="Loni">Loni</option>
        <option value="Siliguri">Siliguri</option>
        <option value="Jhansi">Jhansi</option>
        <option value="Ulhasnagar">Ulhasnagar</option>
        <option value="Nellore">Nellore</option>
        <option value="Jammu">Jammu</option>
        <option value="Sangli">Sangli</option>
        <option value="Belgaum">Belgaum</option>
        <option value="Mangalore">Mangalore</option>
        <option value="Ambattur">Ambattur</option>
        <option value="Tirunelveli">Tirunelveli</option>
        <option value="Malegaon">Malegaon</option>
        <option value="Gaya">Gaya</option>
        <option value="Udaipur">Udaipur</option>
        <option value="Maheshtala">Maheshtala</option>
        <option value="Davanagere">Davanagere</option>
        <option value="Kozhikode">Kozhikode</option>
        <option value="Kurnool">Kurnool</option>
        <option value="Rajahmundry">Rajahmundry</option>
        <option value="Bokaro Steel City">Bokaro Steel City</option>
        <option value="South Dumdum">South Dumdum</option>
        <option value="Bellary">Bellary</option>
        <option value="Patiala">Patiala</option>
        <option value="Gopalpur">Gopalpur</option>
        <option value="Agartala">Agartala</option>
        <option value="Bhagalpur">Bhagalpur</option>
        <option value="Muzaffarnagar">Muzaffarnagar</option>
        <option value="Bhatpara">Bhatpara</option>
        <option value="Panihati">Panihati</option>
        <option value="Latur">Latur</option>
        <option value="Dhule">Dhule</option>
        <option value="Rohtak">Rohtak</option>
        <option value="Korba">Korba</option>
        <option value="Bhilwara">Bhilwara</option>
        <option value="Brahmapur">Brahmapur</option>
        <option value="Muzaffarpur">Muzaffarpur</option>
        <option value="Ahmednagar">Ahmednagar</option>
        <option value="Mathura">Mathura</option>
        <option value="Kollam">Kollam</option>
        <option value="Avadi">Avadi</option>
        <option value="Kadapa">Kadapa</option>
        <option value="Anantapur">Anantapur</option>
        <option value="Kamarhati">Kamarhati</option>
        <option value="Bilaspur">Bilaspur</option>
        <option value="Sambalpur">Sambalpur</option>
        <option value="Shahjahanpur">Shahjahanpur</option>
        <option value="Satara">Satara</option>
        <option value="Bijapur">Bijapur</option>
        <option value="Rampur">Rampur</option>
        <option value="Shivamogga">Shivamogga</option>
        <option value="Chandrapur">Chandrapur</option>
        <option value="Junagadh">Junagadh</option>
        <option value="Thrissur">Thrissur</option>
        <option value="Alwar">Alwar</option>
        <option value="Bardhaman">Bardhaman</option>
        <option value="Kulti">Kulti</option>
        <option value="Kakinada">Kakinada</option>
        <option value="Nizamabad">Nizamabad</option>
        <option value="Parbhani">Parbhani</option>
        <option value="Tumkur">Tumkur</option>
        <option value="Khammam">Khammam</option>
        <option value="Uzhavarkarai">Uzhavarkarai</option>
        <option value="Bihar Sharif">Bihar Sharif</option>
        <option value="Panipat">Panipat</option>
        <option value="Darbhanga">Darbhanga</option>
        <option value="Bally">Bally</option>
        <option value="Aizawl">Aizawl</option>
        <option value="Dewas">Dewas</option>
        <option value="Ichalkaranji">Ichalkaranji</option>
        <option value="Tirupati">Tirupati</option>
        <option value="Karnal">Karnal</option>
        <option value="Bathinda">Bathinda</option>
        <option value="Jalgaon">Jalgaon</option>
        <option value="Akola">Akola</option>
        <option value="Gulbarga">Gulbarga</option>
        <option value="Nadiad">Nadiad</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
        <option value="Houston">Houston</option>
        <option value="Phoenix">Phoenix</option>
        <option value="Philadelphia">Philadelphia</option>
        <option value="San Antonio">San Antonio</option>
        <option value="San Diego">San Diego</option>
        <option value="Dallas">Dallas</option>
        <option value="San Jose">San Jose</option>
        <option value="Austin">Austin</option>
        <option value="Jacksonville">Jacksonville</option>
        <option value="Fort Worth">Fort Worth</option>
        <option value="Columbus">Columbus</option>
        <option value="Charlotte">Charlotte</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Indianapolis">Indianapolis</option>
        <option value="Seattle">Seattle</option>
        <option value="Denver">Denver</option>
        <option value="Washington">Washington</option>
        <option value="Boston">Boston</option>
        <option value="El Paso">El Paso</option>
        <option value="Nashville">Nashville</option>
        <option value="Detroit">Detroit</option>
        <option value="Oklahoma City">Oklahoma City</option>
        <option value="Portland">Portland</option>
        <option value="Las Vegas">Las Vegas</option>
        <option value="Memphis">Memphis</option>
        <option value="Louisville">Louisville</option>
        <option value="Baltimore">Baltimore</option>
        <option value="Milwaukee">Milwaukee</option>
        <option value="Albuquerque">Albuquerque</option>
        <option value="Tucson">Tucson</option>
        <option value="Fresno">Fresno</option>
        <option value="Mesa">Mesa</option>
        <option value="Sacramento">Sacramento</option>
        <option value="Atlanta">Atlanta</option>
        <option value="Kansas City">Kansas City</option>
        <option value="Colorado Springs">Colorado Springs</option>
        <option value="Miami">Miami</option>
        <option value="Raleigh">Raleigh</option>
        <option value="Omaha">Omaha</option>
        <option value="Long Beach">Long Beach</option>
        <option value="Virginia Beach">Virginia Beach</option>
        <option value="Oakland">Oakland</option>
        <option value="Minneapolis">Minneapolis</option>
        <option value="Tulsa">Tulsa</option>
        <option value="Arlington">Arlington</option>
        <option value="New Orleans">New Orleans</option>
        <option value="Wichita">Wichita</option>
        <option value="Cleveland">Cleveland</option>
        <option value="Tampa">Tampa</option>
        <option value="Bakersfield">Bakersfield</option>
        <option value="Aurora">Aurora</option>
        <option value="Anaheim">Anaheim</option>
        <option value="Honolulu">Honolulu</option>
        <option value="Santa Ana">Santa Ana</option>
        <option value="Riverside">Riverside</option>
        <option value="Corpus Christi">Corpus Christi</option>
        <option value="Lexington">Lexington</option>
        <option value="Henderson">Henderson</option>
        <option value="Stockton">Stockton</option>
        <option value="Saint Paul">Saint Paul</option>
        <option value="Cincinnati">Cincinnati</option>
        <option value="St. Louis">St. Louis</option>
        <option value="Pittsburgh">Pittsburgh</option>
        <option value="Greensboro">Greensboro</option>
        <option value="Lincoln">Lincoln</option>
        <option value="Anchorage">Anchorage</option>
        <option value="Plano">Plano</option>
        <option value="Orlando">Orlando</option>
        <option value="Irvine">Irvine</option>
        <option value="Newark">Newark</option>
        <option value="Toledo">Toledo</option>
        <option value="Durham">Durham</option>
        <option value="Chula Vista">Chula Vista</option>
        <option value="Fort Wayne">Fort Wayne</option>
        <option value="Jersey City">Jersey City</option>
        <option value="St. Petersburg">St. Petersburg</option>
        <option value="Laredo">Laredo</option>
        <option value="Madison">Madison</option>
        <option value="Chandler">Chandler</option>
        <option value="Buffalo">Buffalo</option>
        <option value="Lubbock">Lubbock</option>
        <option value="Scottsdale">Scottsdale</option>
        <option value="Reno">Reno</option>
        <option value="Glendale">Glendale</option>
        <option value="Gilbert">Gilbert</option>
        <option value="Winston-Salem">Winston-Salem</option>
        <option value="North Las Vegas">North Las Vegas</option>
        <option value="Norfolk">Norfolk</option>
        <option value="Chesapeake">Chesapeake</option>
        <option value="Garland">Garland</option>
        <option value="Irving">Irving</option>
        <option value="Hialeah">Hialeah</option>
        <option value="Fremont">Fremont</option>
        <option value="Boise">Boise</option>
        <option value="Richmond">Richmond</option>
        <option value="Baton Rouge">Baton Rouge</option>
        <option value="Spokane">Spokane</option>
        <option value="Des Moines">Des Moines</option>
        <option value="Tacoma">Tacoma</option>
        <option value="San Bernardino">San Bernardino</option>
        <option value="Modesto">Modesto</option>
        <option value="Fontana">Fontana</option>
        <option value="Santa Clarita">Santa Clarita</option>
        <option value="Birmingham">Birmingham</option>
        <option value="Oxnard">Oxnard</option>
        <option value="Fayetteville">Fayetteville</option>
        <option value="Moreno Valley">Moreno Valley</option>
        <option value="Rochester">Rochester</option>
        <option value="Glendale">Glendale</option>
        <option value="Huntington Beach">Huntington Beach</option>
        <option value="Salt Lake City">Salt Lake City</option>
        <option value="Grand Rapids">Grand Rapids</option>
        <option value="Amarillo">Amarillo</option>
        <option value="Yonkers">Yonkers</option>
        <option value="Aurora">Aurora</option>
        <option value="Montgomery">Montgomery</option>
        <option value="Akron">Akron</option>
        <option value="Little Rock">Little Rock</option>
        <option value="Huntsville">Huntsville</option>
        <option value="Augusta">Augusta</option>
        <option value="Port St. Lucie">Port St. Lucie</option>
        <option value="Grand Prairie">Grand Prairie</option>
        <option value="Columbus">Columbus</option>
        <option value="Tallahassee">Tallahassee</option>
        <option value="Overland Park">Overland Park</option>
        <option value="Tempe">Tempe</option>
        <option value="McKinney">McKinney</option>
        <option value="Cape Coral">Cape Coral</option>
        <option value="Shreveport">Shreveport</option>
        <option value="Frisco">Frisco</option>
        <option value="Knoxville">Knoxville</option>
        <option value="Worcester">Worcester</option>
        <option value="Brownsville">Brownsville</option>
        <option value="Vancouver">Vancouver</option>
        <option value="Fort Lauderdale">Fort Lauderdale</option>
        <option value="Sioux Falls">Sioux Falls</option>
        <option value="Ontario">Ontario</option>
        <option value="Chattanooga">Chattanooga</option>
        <option value="Providence">Providence</option>
        <option value="Newport News">Newport News</option>
        <option value="Rancho Cucamonga">Rancho Cucamonga</option>
        <option value="Santa Rosa">Santa Rosa</option>
        <option value="Oceanside">Oceanside</option>
        <option value="Salem">Salem</option>
        <option value="Elk Grove">Elk Grove</option>
        <option value="Pembroke Pines">Pembroke Pines</option>
        <option value="Peoria">Peoria</option>
        <option value="Eugene">Eugene</option>
        <option value="Corona">Corona</option>
        <option value="Cary">Cary</option>
        <option value="Springfield">Springfield</option>
        <option value="Fort Collins">Fort Collins</option>
        <option value="Jackson">Jackson</option>
        <option value="Alexandria">Alexandria</option>
        <option value="Hayward">Hayward</option>
        <option value="Lancaster">Lancaster</option>
        <option value="Lakewood">Lakewood</option>
        <option value="Clarksville">Clarksville</option>
        <option value="Palmdale">Palmdale</option>
        <option value="Salinas">Salinas</option>
        <option value="Hollywood">Hollywood</option>
        <option value="Pasadena">Pasadena</option>
        <option value="Naperville">Naperville</option>
        <option value="Kansas City">Kansas City</option>
        <option value="Joliet">Joliet</option>
        <option value="Paterson">Paterson</option>
        <option value="Bridgeport">Bridgeport</option>
        <option value="Torrance">Torrance</option>
        <option value="McAllen">McAllen</option>
        <option value="Syracuse">Syracuse</option>
        <option value="Mesquite">Mesquite</option>
        <option value="Savannah">Savannah</option>
        <option value="Dayton">Dayton</option>
        <option value="Clarksville">Clarksville</option>
        <option value="Orange">Orange</option>
      </datalist>
    </div>
  );
};

export default forwardRef(Search);
