// For old Q2-y bins
function z_pT_bin_values(Q2_y_Bin_Num, bin, return_type){

    // For Q2-y Bin 1
    let z_bins_list  = [0.15, 0.20, 0.24, 0.29, 0.40, 0.73]
    // For Q2-y Bin 1/2/3
    let pT_bins_list = [0.05, 0.20, 0.30, 0.40, 0.50, 0.60, 0.75, 1.00]

    // For Q2-y Bin 2
    if(Q2_y_Bin_Num == "2"){
        z_bins_list  = [0.18, 0.23, 0.26, 0.31, 0.38, 0.50, 0.74]
    }
    // For Q2-y Bin 3
    if(Q2_y_Bin_Num == "3"){
        z_bins_list  = [0.22, 0.28, 0.35, 0.45, 0.60, 0.78]
    }
    // For Q2-y Bin 4
    if(Q2_y_Bin_Num == "4"){
        z_bins_list  = [0.26, 0.32, 0.37, 0.43, 0.50, 0.60, 0.71]
        pT_bins_list = [0.05, 0.20, 0.30, 0.40, 0.50, 0.60, 0.80]
    }
    // For Q2-y Bin 5
    if(Q2_y_Bin_Num == "5"){
        z_bins_list  = [0.15, 0.19, 0.24, 0.29, 0.38, 0.50, 0.73]
        pT_bins_list = [0.05, 0.22, 0.32, 0.41, 0.51, 0.65, 1.00]
    }
    // For Q2-y Bin 6
    if(Q2_y_Bin_Num == "6"){
        z_bins_list  = [0.18, 0.23, 0.30, 0.39, 0.50, 0.78]
        pT_bins_list = [0.05, 0.22, 0.32, 0.41, 0.51, 0.65, 1.00]
    }
    // For Q2-y Bin 7
    if(Q2_y_Bin_Num == "7"){
        z_bins_list  = [0.18, 0.23, 0.30, 0.39, 0.50, 0.78]
        pT_bins_list = [0.05, 0.20, 0.30, 0.40, 0.50, 0.65, 1.00]
    }
    // For Q2-y Bin 8
    if(Q2_y_Bin_Num == "8"){
        z_bins_list  = [0.26, 0.32, 0.36, 0.40, 0.45, 0.53, 0.72]
        pT_bins_list = [0.05, 0.20, 0.30, 0.40, 0.52, 0.75]
    }
    // For Q2-y Bin 9
    if(Q2_y_Bin_Num == "9"){
        z_bins_list  = [0.15, 0.20, 0.24, 0.30, 0.38, 0.48, 0.72]
        pT_bins_list = [0.05, 0.22, 0.30, 0.38, 0.46, 0.60, 0.95]
    }
    // For Q2-y Bin 10
    if(Q2_y_Bin_Num == "10"){
        z_bins_list  = [0.18, 0.23, 0.26, 0.32, 0.40, 0.50, 0.72]
        pT_bins_list = [0.05, 0.22, 0.32, 0.41, 0.51, 0.65, 1.00]
    }
    // For Q2-y Bin 11
    if(Q2_y_Bin_Num == "11"){
        z_bins_list  = [0.21, 0.26, 0.32, 0.40, 0.50, 0.70]
        pT_bins_list = [0.05, 0.20, 0.31, 0.40, 0.50, 0.64, 0.95]
    }
    // For Q2-y Bin 12
    if(Q2_y_Bin_Num == "12"){
        z_bins_list  = [0.26, 0.32, 0.40, 0.50, 0.70]
        pT_bins_list = [0.05, 0.22, 0.32, 0.41, 0.51, 0.67]
    }
    // For Q2-y Bin 13
    if(Q2_y_Bin_Num == "13"){
        z_bins_list  = [0.15, 0.20, 0.24, 0.30, 0.40, 0.72]
        pT_bins_list = [0.05, 0.23, 0.34, 0.43, 0.55, 0.90]
    }
    // For Q2-y Bin 14
    if(Q2_y_Bin_Num == "14"){
        z_bins_list  = [0.18, 0.23, 0.27, 0.33, 0.44, 0.74]
        pT_bins_list = [0.05, 0.23, 0.34, 0.44, 0.55, 0.90]
    }
    // For Q2-y Bin 15
    if(Q2_y_Bin_Num == "15"){
        z_bins_list  = [0.21, 0.28, 0.35, 0.47, 0.72]
        pT_bins_list = [0.05, 0.23, 0.34, 0.45, 0.58, 0.90]
    }
    // For Q2-y Bin 16
    if(Q2_y_Bin_Num == "16"){
        z_bins_list  = [0.15, 0.20, 0.25, 0.32, 0.41, 0.71]
        pT_bins_list = [0.05, 0.24, 0.36, 0.55, 0.80]
    }
    // For Q2-y Bin 17
    if(Q2_y_Bin_Num == "17"){
        z_bins_list  = [0.18, 0.23, 0.30, 0.38, 0.48, 0.72]
        pT_bins_list = [0.05, 0.23, 0.36, 0.51, 0.85]
    }

    var output = "Error"
    if(return_type.includes("_z")){
        var z_bin_num = (z_bins_list.length) - bin
        if((bin + 1) > z_bins_list.length){
            output = "";
            // alert(output);
        }
        else{
            if(return_type.includes("Center")){
                // output = ((z_bins_list[bin] + z_bins_list[bin - 1])/2).toFixed(3);
                output = ((z_bins_list[z_bin_num] + z_bins_list[z_bin_num - 1])/2).toFixed(3);
            }
            else{
                // var min_z = (z_bins_list[bin - 1]).toFixed(2);
                // var max_z = (z_bins_list[bin]).toFixed(2);
                var min_z = (z_bins_list[z_bin_num - 1]).toFixed(2);
                var max_z = (z_bins_list[z_bin_num]).toFixed(2);
                output = min_z + " - " + max_z;
            }
        }
    }
    if(return_type.includes("_pT")){
        if((bin + 1) > pT_bins_list.length){
            output = "";
            // alert(output);
        }
        else{
            if(return_type.includes("Center")){
                output = ((pT_bins_list[bin] + pT_bins_list[bin - 1])/2).toFixed(3);
            }
            else{
                var min_pT = (pT_bins_list[bin - 1]).toFixed(2);
                var max_pT = (pT_bins_list[bin]).toFixed(2);
                output = min_pT + " - " + max_pT;
            }
        }
    }

    return output;
}

// For new Q2-y bins
function z_pT_bin_values_New(Q2_Y_Bin_Num, bin, return_type, Bin_Version){
    var output = "Error"
    if((! Bin_Version.includes("New")) || (Bin_Version.includes("Old"))){
        return z_pT_bin_values(Q2_Y_Bin_Num, bin, return_type);
    }
    else{
        // For Q2-y Bin 1
        // if(Q2_Y_Bin_Num == "1" || Q2_Y_Bin_Num == 1){
        let z_Borders  = [0.16, 0.19, 0.23, 0.29, 0.40, 0.71]
        let pT_Borders = [0.05, 0.22, 0.32, 0.42, 0.52, 0.63, 0.75, 0.99]
        // }
        if(Q2_Y_Bin_Num == "2" || Q2_Y_Bin_Num == 2){
            z_Borders  = [0.19, 0.23, 0.26, 0.31, 0.38, 0.50, 0.75]
            pT_Borders = [0.05, 0.25, 0.35, 0.45, 0.54, 0.67, 0.93]
        }
        // For Q2-y Bin 3
        if(Q2_Y_Bin_Num == "3" || Q2_Y_Bin_Num == 3){
            z_Borders  = [0.22, 0.28, 0.33, 0.41, 0.56, 0.75]
            pT_Borders = [0.05, 0.20, 0.30, 0.39, 0.49, 0.59, 0.76]
        }
        // For Q2-y Bin 4
        if(Q2_Y_Bin_Num == "4" || Q2_Y_Bin_Num == 4){
            z_Borders  = [0.26, 0.33, 0.38, 0.43, 0.50, 0.59, 0.71]
            pT_Borders = [0.05, 0.20, 0.29, 0.38, 0.48, 0.61, 0.85]
        }
        // For Q2-y Bin 5
        if(Q2_Y_Bin_Num == "5" || Q2_Y_Bin_Num == 5){
            z_Borders  = [0.16, 0.20, 0.24, 0.30, 0.38, 0.49, 0.72]
            pT_Borders = [0.05, 0.22, 0.32, 0.41, 0.51, 0.65, 0.98]
        }
        // For Q2-y Bin 6
        if(Q2_Y_Bin_Num == "6" || Q2_Y_Bin_Num == 6){
            z_Borders  = [0.18, 0.23, 0.28, 0.35, 0.45, 0.72]
            pT_Borders = [0.05, 0.22, 0.32, 0.41, 0.51, 0.65, 1.0]
        }
        // For Q2-y Bin 7
        if(Q2_Y_Bin_Num == "7" || Q2_Y_Bin_Num == 7){
            z_Borders  = [0.22, 0.27, 0.31, 0.37, 0.45, 0.58, 0.77]
            pT_Borders = [0.05, 0.20, 0.29, 0.38, 0.48, 0.60, 0.83]
        }
        // For Q2-y Bin 8
        if(Q2_Y_Bin_Num == "8" || Q2_Y_Bin_Num == 8){
            z_Borders  = [0.27, 0.33, 0.36, 0.39, 0.44, 0.49, 0.56, 0.70]
            pT_Borders = [0.05, 0.20, 0.29, 0.37, 0.46, 0.60]
        }
        // For Q2-y Bin 9
        if(Q2_Y_Bin_Num == "9" || Q2_Y_Bin_Num == 9){
            z_Borders  = [0.16, 0.20, 0.24, 0.30, 0.42, 0.70]
            pT_Borders = [0.05, 0.22, 0.30, 0.38, 0.46, 0.58, 0.74, 0.95]
        }
        // For Q2-y Bin 10
        if(Q2_Y_Bin_Num == "10" || Q2_Y_Bin_Num == 10){
            z_Borders  = [0.19, 0.23, 0.26, 0.32, 0.40, 0.50, 0.72]
            pT_Borders = [0.05, 0.21, 0.31, 0.40, 0.50, 0.64, 0.90]
        }
        // For Q2-y Bin 11
        if(Q2_Y_Bin_Num == "11" || Q2_Y_Bin_Num == 11){
            z_Borders  = [0.22, 0.27, 0.32, 0.39, 0.52, 0.73]
            pT_Borders = [0.05, 0.20, 0.30, 0.40, 0.53, 0.69]
        }
        // For Q2-y Bin 12
        if(Q2_Y_Bin_Num == "12" || Q2_Y_Bin_Num == 12){
            z_Borders  = [0.27, 0.33, 0.37, 0.43, 0.51, 0.70]
            pT_Borders = [0.05, 0.20, 0.28, 0.36, 0.45, 0.60]
        }
        // For Q2-y Bin 13
        if(Q2_Y_Bin_Num == "13" || Q2_Y_Bin_Num == 13){
            z_Borders  = [0.16, 0.20, 0.24, 0.29, 0.35, 0.46, 0.72]
            pT_Borders = [0.05, 0.22, 0.34, 0.44, 0.58, 0.90]
        }
        // For Q2-y Bin 14
        if(Q2_Y_Bin_Num == "14" || Q2_Y_Bin_Num == 14){
            z_Borders  = [0.19, 0.23, 0.27, 0.32, 0.39, 0.50, 0.71]
            pT_Borders = [0.05, 0.21, 0.31, 0.40, 0.50, 0.64, 0.90]
        }
        // For Q2-y Bin 15
        if(Q2_Y_Bin_Num == "15" || Q2_Y_Bin_Num == 15){
            z_Borders  = [0.22, 0.27, 0.32, 0.40, 0.49, 0.73]
            pT_Borders = [0.05, 0.22, 0.32, 0.42, 0.55, 0.80]
        }
        // For Q2-y Bin 16
        if(Q2_Y_Bin_Num == "16" || Q2_Y_Bin_Num == 16){
            z_Borders  = [0.16, 0.20, 0.24, 0.31, 0.42, 0.67]
            pT_Borders = [0.05, 0.22, 0.32, 0.42, 0.52, 0.66, 0.90]
        }
        // For Q2-y Bin 17
        if(Q2_Y_Bin_Num == "17" || Q2_Y_Bin_Num == 17){
            z_Borders  = [0.19, 0.23, 0.28, 0.34, 0.44, 0.68]
            pT_Borders = [0.05, 0.19, 0.28, 0.37, 0.45, 0.55, 0.73]
        }
        var output = "Error"
        if(return_type.includes("_z")){
            var z_bin_num = (z_Borders.length) - bin
            if((bin + 1) > z_Borders.length){
                output = "";
                // alert(output);
            }
            else{
                if(return_type.includes("Center")){
                    // output = ((z_Borders[bin] + z_Borders[bin - 1])/2).toFixed(3);
                    output = ((z_Borders[z_bin_num] + z_Borders[z_bin_num - 1])/2).toFixed(3);
                }
                else{
                    // var min_z = (z_Borders[bin - 1]).toFixed(2);
                    // var max_z = (z_Borders[bin]).toFixed(2);
                    var min_z = (z_Borders[z_bin_num - 1]).toFixed(2);
                    var max_z = (z_Borders[z_bin_num]).toFixed(2);
                    output = min_z + " - " + max_z;
                }
            }
        }
        if(return_type.includes("_pT")){
            if((bin + 1) > pT_Borders.length){
                output = "";
                // alert(output);
            }
            else{
                if(return_type.includes("Center")){
                    output = ((pT_Borders[bin] + pT_Borders[bin - 1])/2).toFixed(3);
                }
                else{
                    var min_pT = (pT_Borders[bin - 1]).toFixed(2);
                    var max_pT = (pT_Borders[bin]).toFixed(2);
                    output = min_pT + " - " + max_pT;
                }
            }
        }
        return output;
    }
    return output;
}


function z_pT_Rows_Function(Q2_Y_Bin_NUM, Bin_Version){
    var row_start = 7; // Refers to the number of pT bins in the Q2-xB/Q2-y bin
    var num_rows  = 6; // Refers to the number of z bins in the Q2-xB/Q2-y bin
    
    if((! Bin_Version.includes("New")) || (Bin_Version.includes("Old"))){ // For old Q2-y bins
        //  row_start = 7 for Bin 1, and 2, and 3
        if(Q2_Y_Bin_NUM == "4"  || Q2_Y_Bin_NUM == "5"  || Q2_Y_Bin_NUM == "6"  || Q2_Y_Bin_NUM == "7"  || Q2_Y_Bin_NUM == "9" || Q2_Y_Bin_NUM == "10" || Q2_Y_Bin_NUM == "11"){
            row_start = 6;
        }
        if(Q2_Y_Bin_NUM == "8"  || Q2_Y_Bin_NUM == "12" || Q2_Y_Bin_NUM == "13" || Q2_Y_Bin_NUM == "14" || Q2_Y_Bin_NUM == "15"){
            row_start = 5;
        }
        if(Q2_Y_Bin_NUM == "16" || Q2_Y_Bin_NUM == "17"){
            row_start = 4;
        }
        //  num_rows = 6 for Bin 2, 4, 5, 8, 9, and 10
        if(Q2_Y_Bin_NUM == "1"  || Q2_Y_Bin_NUM == "3"  || Q2_Y_Bin_NUM == "6" || Q2_Y_Bin_NUM == "7" || Q2_Y_Bin_NUM == "11" || Q2_Y_Bin_NUM == "13" || Q2_Y_Bin_NUM == "14" || Q2_Y_Bin_NUM == "16" || Q2_Y_Bin_NUM == "17"){
            num_rows = 5;
        }
        if(Q2_Y_Bin_NUM == "12" || Q2_Y_Bin_NUM == "15"){
            num_rows = 4;
        }
    }
    else{ // For new Q2-y bins
        //  row_start = 7 for Bin 1, 8, and 9
        if(Q2_Y_Bin_NUM == "2"  || Q2_Y_Bin_NUM == "3"  || Q2_Y_Bin_NUM == "4"  || Q2_Y_Bin_NUM == "5"  || Q2_Y_Bin_NUM == "6"  || Q2_Y_Bin_NUM == "7"  || Q2_Y_Bin_NUM == "10" || Q2_Y_Bin_NUM == "14" || Q2_Y_Bin_NUM == "16" || Q2_Y_Bin_NUM == "17"){
            row_start = 6;
        }
        if(Q2_Y_Bin_NUM == "8"  || Q2_Y_Bin_NUM == "11" || Q2_Y_Bin_NUM == "12" || Q2_Y_Bin_NUM == "13" || Q2_Y_Bin_NUM == "15"){
            row_start = 5;
        }
        //  num_rows = 6 for Bin 2, 4, 5, 7, 10, 13 and 14
        if(Q2_Y_Bin_NUM == "8"){
            num_rows = 7;
        }
        if(Q2_Y_Bin_NUM == "1"  || Q2_Y_Bin_NUM == "3"  || Q2_Y_Bin_NUM == "6"  || Q2_Y_Bin_NUM == "9"  || Q2_Y_Bin_NUM == "11" || Q2_Y_Bin_NUM == "12" || Q2_Y_Bin_NUM == "15" || Q2_Y_Bin_NUM == "16" || Q2_Y_Bin_NUM == "17"){
            num_rows = 5;
        }
    }

    return [row_start, num_rows]
}


function Overflow_z_pT_Bins(Q2_Y_Bin_NUM, Bin_Number, Bin_Version){
    var output_bool = false;
    if((! Bin_Version.includes("New")) || (Bin_Version.includes("Old"))){ // For old Q2-y bins
        if((Q2_Y_Bin_NUM == "1")  && (Bin_Number == 28 || Bin_Number == 34 || Bin_Number == 35)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "2")  && (Bin_Number == 28 || Bin_Number == 35 || Bin_Number == 41 || Bin_Number == 42)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "3")  && (Bin_Number == 28 || Bin_Number == 35)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "4")  && (Bin_Number == 6  || Bin_Number == 36)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "5")  && (Bin_Number == 30 || Bin_Number == 36)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "6")  && (Bin_Number == 30)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "7")  && (Bin_Number == 24 || Bin_Number == 30)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "9")  && (Bin_Number == 36)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "10") && (Bin_Number == 30 || Bin_Number == 36)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "11") && (Bin_Number == 24 || Bin_Number == 30)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "13") && (Bin_Number == 25)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "14") && (Bin_Number == 25)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "15") && (Bin_Number == 20)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "16") && (Bin_Number == 20)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == "17") && (Bin_Number == 20)){
            output_bool = true;
        }
    }
    else{ // For new Q2-y bins
        if((Q2_Y_Bin_NUM == '1')  && ((Bin_Number == 21) || (Bin_Number == 27) || (Bin_Number == 28) || (Bin_Number == 33) || (Bin_Number == 34) || (Bin_Number == 35))){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '2')  && ((Bin_Number == 24) || (Bin_Number == 30) || (Bin_Number == 35) || (Bin_Number == 36))){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '3')  && (Bin_Number == 30)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '4')  && ((Bin_Number == 6)  || (Bin_Number == 30) || (Bin_Number == 36))){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '5')  && ((Bin_Number == 24) || (Bin_Number == 30) || (Bin_Number == 35) || (Bin_Number == 36))){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '6')  && ((Bin_Number == 18) || (Bin_Number == 24) || (Bin_Number == 29) || (Bin_Number == 30))){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '7')  && ((Bin_Number == 6)  || (Bin_Number == 30) || (Bin_Number == 36))){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '9')  && ((Bin_Number == 21) || (Bin_Number == 27) || (Bin_Number == 28) || (Bin_Number == 33) || (Bin_Number == 34) || (Bin_Number == 35))){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '10') && ((Bin_Number == 24) || (Bin_Number == 30) || (Bin_Number == 35) || (Bin_Number == 36))){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '11') && (Bin_Number == 25)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '12') && (Bin_Number == 5)){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '13') && ((Bin_Number == 20) || (Bin_Number == 25) || (Bin_Number == 29) || (Bin_Number == 30))){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '14') && ((Bin_Number == 24) || (Bin_Number == 30) || (Bin_Number == 35) || (Bin_Number == 36))){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '15') && ((Bin_Number == 5)  || (Bin_Number == 20) || (Bin_Number == 25))){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '16') && ((Bin_Number == 18) || (Bin_Number == 23) || (Bin_Number == 24) || (Bin_Number == 28) || (Bin_Number == 29) || (Bin_Number == 30))){
            output_bool = true;
        }
        if((Q2_Y_Bin_NUM == '17') && ((Bin_Number == 24) || (Bin_Number == 29) || (Bin_Number == 30))){
            output_bool = true;
        }
    }
    return output_bool;
}
