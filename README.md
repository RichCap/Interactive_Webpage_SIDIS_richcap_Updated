# Interactive Web page for Richard Capobianco's Multidimensional SIDIS Analysis of CLAS12 data

This README.md file contains update notes and links related to the work shown in the following web page: https://userweb.jlab.org/~richcap/Interactive_Webpage_SIDIS_richcap/Interactive_Unfolding_Page.html

## Links
* Link to the files/images used in the web page linked above: https://userweb.jlab.org/~richcap/
* Link to main analysis code (Github): https://github.com/RichCap/SIDIS_Analysis_CLAS12_RichCap/tree/master

## Updates/Notes
* On 8-28-2023:
    * Updated main webpage with new closure tests including the unfolding of modulated and unmodulated Monte Carlo datasets (treated in the same way as the experimental data set)
        * The modulated Monte Carlo results demonstrate our ability to use a Monte Carlo Response matrix that does not have modulations to unfold a dataset that does have modulations in the phi_h distribution
    * Added the ability to see the individual plots for integrated z-pT bins through the webpage
    * Added plots which more directly shows the comparisons between the particle kinematics within each kinematic bin
        * New option that is available while plotting the z-pT bins individually
        * .txt files have also been created that give more details about each comparison, but the webpage has not yet been updated to allow for the easy filtering/reading of these files (planning for some option to be made available in the future)
    * Deleted a large number of old file versions that were no longer in use
        * Mainly effects the original (now old) webpage with fewer options from the current webpage being removed
        * Was necessary due to the large number of files that were accumulating in the webpage's directories (were backed-up so old images can still be made available on request)

* On 8-8-2023:
    * Updated the Momentum Smearing/Correction Histograms
        * Added the Vs_Phi plots and new smearing factor tests

* On 8-3-2023:
    * Created a new version of the webpage to contain more recent updates
        * The new and old version are still linked via buttons on each page, but the new page is contained at the following address:  https://userweb.jlab.org/~richcap/Interactive_Webpage_SIDIS_richcap/Interactive_Unfolding_Page_Updated.html
    * Added the plots of the fit parameters used to fit the phi_h distributions
    * Added titles to more options so more information about those options can be given by hovering over the list option before selecting it
    * Updated the table used to select individual z-pT bins
        * The bin borders will now automatically update themselves when changing between Q2-y bins
        * Empty kinematic bins that were being skipped while processing the plots are now also skipped in the table as well
            * The empty bins will be colored red if there is not supposed to be an image to go with it
    * The Momentum Correction/Smearing plots have been updated
        * Updated interface should make it easier to navigate through the different images
        * Additional options of smear factors are included to compare between their effectiveness
            * The smear factor that is selected by default when first selecting the option to see these plots is the one used by the main set of smeared images
                * As of this update, the smear factor used in the other SIDIS images is 0.75 (Applied only to the simulated reconstructed momentum)

* On 7-19-2023:
    * Added multiple new iterations of the Momentum Correction/Smearing Histograms
    * Added new options to view the Multi-Dimensional Unfolding Plots
        * Including new z-pT-phi unfolding
    * Updated the z-pT binning scheme for the Q2-y Bins

* On 6-16-2023:
    * Fixed issue with the error bars in the Multidimensional Unfolding Histograms (improved the reliability of the fit parameters)
    * Added plots which included missing mass cuts to the generated events

* On 6-14-2023:
    * Made the Q2-y binning the new default
    * Updated images (general)
    * Added new multidimensional unfolding histograms for the new y-binning files

* On 6-7-2023:
    * Added Q2-y binning histograms (unsmeared at this time)
        * These bins have new z-pT bins already defined but the table on this page has not been updated to feature the correct ranges yet
            * The table now are labeled based on row/column number
            * There currently is an issue with the z-pT image for Q2-y bin 1 when plotted without the z-pT bins which is purely visual (the individual plots show the correct image)
    * Added unfolding plots for the Missing Mass variable
        * These plots feature Missing Mass Cuts to the Generated Events

* On 4-25-2023:
    * Updated the Smearing/Correction Histograms (including the FX smearing plots)
        * Fixed some cuts and applied new corrections to the Monte Carlo data (corrections applied before smearing)
        * Newest update does not include plots without momentum corrections
    * Updates not made to the other Unfolding Histograms (due to memory issues while running the code)
        * Will be updated as soon as these issues are resolved

* On 3-28-2023:
    * Fixed some bugs in the webpage that caused some issues when switching between images
    * Updated the ∆P plots to use ∆P = P_gen - P_rec instead of P_calc - P_measured for the MC files
        * Update does not include new smearing functions (yet)
            * New smearing function will be required based on these results
        * Does include new momentum corrections (formating will change with larger update later)
        * New MC momentum corrections are applied to all Smearing/Correction Histograms but NOT to any of the unfolding histograms (they have not yet been updated)
    * No update to the (content of the) Unfolding Histograms yet. Next iteration is being tested for:
        * A new Q2-xB binning scheme (in development)
        * A new set of code to create the binning scheme (testing to make sure new code is identical in practice to the old code)
        * Will be fixing an issue with one of the cuts not properly being applied (next iteration will fix this issue, but for now only the new ∆P Histos have the cuts (from Valerii) fixed)
        * Memory consumption issues encountered during the testing of the new bins has delayed these updates

* On 3-14-2023:
    * Updated how the images are sorted/viewed (interface update)
    * Fixed some issues with the multidimensional unfolding histograms
        * The bins were not counted properly in previous versions
        * The last multidimensional bin/histogram is still missing at this time for unknown reasons
            * Unfolding should still include it otherwise so other plots should be fine
    * More histograms were added to the 'Extra Unfolding Histograms' option
    * Added a new option in 'Update Version' which shows a test of the unfolding procedures which replaces the experimental data with the MC reconstructed data
        * This test shows how well the unfolding procedures work by unfolding the simulated data to compare with the know generated distributions
    * Added plots of the B and C parameters plotted versus the z and pT parameters


* On 3-7-2023:
    * Added more examples of Multi-dimensional unfolding procedure
        * Plots added use the 'combined' binning schemes which allow for multi-dimensional unfolding
        * Plots do have some errors already noted (will be fixing)
        * Not included in the 'Update Version' list (images are saved in another way/folder)
* On 3-1-2023:
    * The Bayesian Unfolding method is now the default image shown (will now be the 1st image to load onscreen when opening the web page - was SVD)
    * Can now double click any image to have it pop up in a separate window
    * Updated 'Image Info' button
    * Added link to the most recent version of the Analysis Note for this work and a link to these notes
        * No new files were added except for the Analysis Note
    * Multiple fixes to option menus and image referencing
* On 2-28-2023:
    * Added new versions of images:
        * Updated smearing functions to be compatible with the most recent analysis note (for APS) - not all are identical as of this update
        * Added the other kinematic variables for unfolding and an initial multidimensional unfolding example
* On 2-21-2023:
    * Added new version of images:
        * Applied new smearing functions (from last version)
        * Now showing the phase space of SIDIS/Exclusive cuts for smearing plots
        * Now have the combined plots for all z-pT bins with smearing
        * Plots showing the other unfolded variables are now in the folders of this current version (not included in the web page yet)
    * Smeared plots are now the default option shown when opening the web page
    * Issue with the Parameter Plots has led to their temporary removal from the folders of this current version
* On 2-14-2023:
    * Added new version of images:
        * Applied new smearing functions (from last version)
        * Increased the number of iterations (from 4 to 10) in the bayesian unfold method
    * Other methods are returned in this version (were removed for just the last version)
    * Parameter Plots added to Github (but not to the web page)
        * Update to the web page to come later (i.e., see https://userweb.jlab.org/~richcap/ for these files)
* On 2-7-2023:
    * Added option to switch to older versions of the images
    * Modified the way the Smearing Histograms are presented (also added exclusive Missing Mass plots to these options)
    * Changes aspects of how the (individual) unfolding histograms are presented
* On 2-1-2023:
    * Added ability to click and hold bins in z-pT table
        * Hovering pops-up new image, clicking locks the image (unlocks on a second click), and double-clicking opens the second image in a new window
    * Cells in table now change color on mouseover/click
* This webpage/repository was uploaded/created on 1-30-2023