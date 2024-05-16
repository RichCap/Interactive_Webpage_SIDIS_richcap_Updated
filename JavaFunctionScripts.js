function toUnicodeVariant(str, variant, flags) {
    const offsets = {
        m: [0x1d670, 0x1d7f6],
        b: [0x1d400, 0x1d7ce],
        i: [0x1d434, 0x00030],
        bi: [0x1d468, 0x00030],
        c: [0x0001d49c, 0x00030],
        bc: [0x1d4d0, 0x00030],
        g: [0x1d504, 0x00030],
        d: [0x1d538, 0x1d7d8],
        bg: [0x1d56c, 0x00030],
        s: [0x1d5a0, 0x1d7e2],
        bs: [0x1d5d4, 0x1d7ec],
        is: [0x1d608, 0x00030],
        bis: [0x1d63c, 0x00030],
        o: [0x24B6, 0x2460],
        on: [0x0001f150, 0x2460],
        p: [0x249c, 0x2474],
        q: [0x1f130, 0x00030],
        qn: [0x0001F170, 0x00030],
        w: [0xff21, 0xff10],
        u: [0x2090, 0xff10]
    }

    const variantOffsets = {
        'monospace': 'm',
        'bold' : 'b',
        'italic' : 'i',
        'bold italic' : 'bi',
        'script': 'c',
        'bold script': 'bc',
        'gothic': 'g',
        'gothic bold': 'bg',
        'doublestruck': 'd',
        'sans': 's',
        'bold sans' : 'bs',
        'italic sans': 'is',
        'bold italic sans': 'bis',
        'parenthesis': 'p',
        'circled': 'o',
        'circled negative': 'on',
        'squared': 'q',
        'squared negative': 'qn',
        'fullwidth': 'w'
    }

    // special characters (absolute values)
    const special = {
        m: {
            ' ': 0x2000,
            '-': 0x2013
        },
        i: {
            'h': 0x210e
        },
        g: {
            'C': 0x212d,
            'H': 0x210c,
            'I': 0x2111,
            'R': 0x211c,
            'Z': 0x2128
        },
        d: {
        'C': 0x2102,
        'H': 0x210D,
        'N': 0x2115,
        'P': 0x2119,
        'Q': 0x211A,
        'R': 0x211D,
        'Z': 0x2124
        },
        o: {
            '0': 0x24EA,
            '1': 0x2460,
            '2': 0x2461,
            '3': 0x2462,
            '4': 0x2463,
            '5': 0x2464,
            '6': 0x2465,
            '7': 0x2466,
            '8': 0x2467,
            '9': 0x2468,
        },
        on: {},
        p: {},
        q: {},
        qn: {},
        w: {}
    }
    //support for parenthesized latin letters small cases 
    //support for full width latin letters small cases 
    //support for circled negative letters small cases 
    //support for squared letters small cases 
    //support for squared letters negative small cases 
    ;['p', 'w', 'on', 'q', 'qn'].forEach(t => {
        for (var i = 97; i <= 122; i++) {
            special[t][String.fromCharCode(i)] = offsets[t][0] + (i-97)
        }
    })		

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'

    const getType = function(variant) {
        if (variantOffsets[variant]) return variantOffsets[variant]
        if (offsets[variant]) return variant
        return 'm' //monospace as default
    }
    const getFlag = function(flag, flags) {
        if (!flags) return false
        return flag.split('|').some(f => flags.split(',').indexOf(f) > -1)
    }

    const type = getType(variant)
    const underline = getFlag('underline|u', flags)
    const strike = getFlag('strike|s', flags)
    let result = ''

    for (let c of str) {
        let index
        if (special[type] && special[type][c]) c = String.fromCodePoint(special[type][c])
        if (type && (index = chars.indexOf(c)) > -1) {
            result += String.fromCodePoint(index + offsets[type][0]) 
        } else if (type && (index = numbers.indexOf(c)) > -1) {
            result += String.fromCodePoint(index + offsets[type][1]) 
        } else {
            result += c 
        }
        if (underline) result += '\u0332' // add combining underline
        if (strike) result += '\u0336' // add combining strike
    }
    return result
}


function Analysis_Note_Link(){
    // var currentName = "Measurement_of_Cosphi_and_Cos2phi_Moments_of_the_Unpolarized_SIDIS_pi+_Cross-section_at_CLAS12-APS_Release.pdf"
    var currentName = "Measurement_of_Cosphi_and_Cos2phi_Moments_of_the_Unpolarized_SIDIS_pi+_Cross-section_at_CLAS12-DNP-JPS_Release.pdf"
    
    aaa = window.open(currentName, currentName, 'height=6, width=600, scrollbars=yes, resizable=yes');
}

function README_Update_Link(){
    var currentName = "README.md"
    aaa = window.open(currentName, currentName, 'height=6, width=600, scrollbars=yes, resizable=no');
}

function Smear_Function_Code_Link(){
    var currentName = "Text_of_Smearing_Function_and_Momentum_Corrections_Code.txt"
    aaa = window.open(currentName, currentName, 'height=6, width=600, scrollbars=yes, resizable=no');
}

function Fit_Parameter_txt_File(){
    // alert("Running Fit_Parameter_txt_File(...)")
    var Image_Version_Input = document.getElementById("Image_Version");
    var Image_Version       = Image_Version_Input.value;
    var currentDirectoryName = Current_Version_Name(Image_Version, "N/A", "N/A");
    // var currentDirectoryName = Current_Version_Name("Web_Only", "N/A", "N/A");
    var Text_File_Version = currentDirectoryName.replace("Web_Images_Interactive_Webpage_SIDIS_richcap/SIDIS_python_Images_From_", "")
    Text_File_Version = Text_File_Version.replace("/Unfolding_Images/", "")
    var Text_File_Name = "Parameters_" + Text_File_Version + "_Q2_y_Bins_Combined.txt"

    var currentName = currentDirectoryName.replace("Unfolding_Images/", "") + Text_File_Name;
    aaa = window.open(currentName, currentName, 'height=6, width=600, scrollbars=yes, resizable=no');
    // alert("Done")
}

function Statistics_txt_File(){
    // alert("Running Statistics_txt_File(...)")
    var Image_Version_Input = document.getElementById("Image_Version");
    var Image_Version       = Image_Version_Input.value;
    var currentDirectoryName = Current_Version_Name(Image_Version, "N/A", "N/A");
    // var currentDirectoryName = Current_Version_Name("Web_Only", "N/A", "N/A");
    var Text_File_Version = currentDirectoryName.replace("Web_Images_Interactive_Webpage_SIDIS_richcap/SIDIS_python_Images_From_", "")
    Text_File_Version = Text_File_Version.replace("/Unfolding_Images/", "")
    var Text_File_Name = "Statistics_" + Text_File_Version + "_Q2_y_Bins_Combined.txt"

    var currentName = currentDirectoryName.replace("Unfolding_Images/", "") + Text_File_Name;
    aaa = window.open(currentName, currentName, 'height=6, width=600, scrollbars=yes, resizable=no');
    // alert("Done")
}

function Bin_Statistics_txt_File(){
    var currentDirectoryName = Current_Version_Name("Web_Only", "N/A", "N/A");

    var Text_File_Version = currentDirectoryName.replace("Web_Images_Interactive_Webpage_SIDIS_richcap/SIDIS_python_Images_From_", "")
    Text_File_Version = Text_File_Version.replace("/Unfolding_Images/", "")

    var Text_File_Name = "Statistics_" + str(Text_File_Version) + "_Q2_y_Bins_Combined.txt"

    var currentName = currentDirectoryName.replace("Unfolding_Images/", "") + Text_File_Name;
    aaa = window.open(currentName, currentName, 'height=6, width=600, scrollbars=yes, resizable=no');
}

function Bin_Borders_txt_File(){
    var currentName = "Bin_Borders_Q2_Y_Bins.txt"
    aaa = window.open(currentName, currentName, 'height=6, width=600, scrollbars=yes, resizable=yes');
}

function Older_Page_Version_Link(){
    // var currentName = "Interactive_Unfolding_Page.html"
    alert("Due to some size limitations, not all images can be uploaded from this page to the host server.\n\nMore images/updates can be saved to the GitHub page for this analysis, so this link is meant to direct you there.\n\nIf you are unable to access certain images on this page, or are interested in updates not yet uploaded here, you may be able to find the information you are looking for on this page.")
    var currentName = "https://github.com/RichCap/Interactive_Webpage_SIDIS_richcap_Updated"
    aaa = window.open(currentName, currentName, 'height=6, width=600, scrollbars=yes, resizable=no');
}

function PicturePopUp_click(picture){
    aaa = window.open(picture.src, picture.src, 'height=6, width=600, scrollbars=yes, resizable=yes');
}

function formatNumber(number){
    const formattedNumber = parseFloat(number).toString();
    const parts = formattedNumber.split('.');
    
    if (parts.length === 2) {
        // Check if the last digit in the decimal part is 0
        if (parts[1].endsWith('0')) {
            return parts[0] + '.' + parts[1].slice(0, -1);
        }
    }
    return formattedNumber;
}

function change_bin_extra_form(){
    var Bin   = document.getElementById("Q2-xB Bin");
    var Bin_2 = document.getElementById("Q2-xB Bin 2");
    Bin.value = Bin_2.value;
}

function change_bin_extra_3_form(){
    var Bin   = document.getElementById("Q2-xB Bin");
    var Bin_y = document.getElementById("Q2_y_Bin");
    Bin.value = Bin_y.value;
}

function change_bin_type(form){
    var Bin        = document.getElementById("Q2-xB Bin");
    var Bin_2      = document.getElementById("Q2-xB Bin 2");
    // var Bin_Type   = document.getElementById("Q2-xB or Q2-y Bin");
    // var Bin_Type_2 = document.getElementById("Q2-xB or Q2-y Bin 2");
    // if(form == "1"){
    //     Bin_Type_2.value = Bin_Type.value;
    // }
    // else{
    //     Bin_Type.value   = Bin_Type_2.value;
    // }
    // var Bin_Type_value   = Bin_Type.value;
    // var Bin_Type_value_2 = Bin_Type_2.value;
    var Bin_Type_value   = "Q2_y";
    var Bin_Type_value_2 = "Q2_y";
    var sliderValue      = document.getElementById("sliderValue");
    var sliderValue_2    = document.getElementById("sliderValue_2");

    // alert(Bin_Title_text);
    // alert(Bin.getAttribute("max"));
    // alert(sliderValue.textContent);
    if(Bin_Type_value.includes("y")){
        // alert("This option is not yet available...")
        // Bin_Title.textContent = Bin_Title_text.replace("xB", "y")
        Bin.setAttribute("max", "17");
        Bin_2.setAttribute("max", "17");
    }
    else{
        if(Bin.value > 8 || Bin_2.value > 8 ){
            Bin.value   = 8;
            Bin_2.value = 8;
            sliderValue.textContent   = 8;
            sliderValue_2.textContent = 8;
        }
        Bin.setAttribute("max", "8");
        Bin_2.setAttribute("max", "8");
        // Bin_Title.textContent = Bin_Title_text.replace("y", "xB")
    }
    // alert(sliderValue.textContent);
}
