<?php
$currencies = array();
$file = fopen("data.csv", "r");
while (!feof($file)) {
    $currency = fgetcsv($file);
    $currencies[] = array(
        'flag' => "assets/img/flags/" . $currency[0] . ".png",
        'country_fullname' => $currency[1],
        'currency_code' => $currency[2],
        'currency_name' => $currency[3],
        'country_name' => $currency[4],
    );
}
fclose($file);
$half = round(sizeof($currencies) / 2);
?>		
<html>
    <head>
        <title>WebOas.is - Currency Converter</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="A currency conversion page that helps you to convert different amounts of money between currencies.">
		<link rel="icon" type="image/png" href="favicon.png">
        <!--CSS Files-->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet">
        <link href="assets/css/bootstrap-select.min.css" rel="stylesheet">
        <link href="assets/css/fontawesome.min.css" rel="stylesheet">
        <link href='assets/css/style.css' rel='stylesheet' type='text/css'>
        <!--JS Files-->
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/popper.min.js"></script> 
        <script src="assets/js/bootstrap.min.js"></script> 
        <script src="assets/js/bootstrap-select.min.js"></script> 
        <script src="assets/js/script.js"></script>
    </head>
    <body>
        <div class="main-content">
            <section class="header">
                <div class="container">
                    <div class="converter">
                        <h1>WebOasis Currency Converter</h1>
                        <div class="convert-box">
                            <div class="row">
                                <div class="col-md-5 col-sm-12 col-xs-12">
                                    <label class="label">From</label>
                                    <div class="select">
                                        <div class="input-wrap">
                                            <input type="text" class="form-control" value="1" name="finpt" id="finpt" pattern="/^-?\d*[.,]?\d{0,2}$/">
                                        </div>
                                        <select id="fromCurr" name="fromCurr"  data-show-subtext="true" class="selectpicker bs-select form-control" data-live-search="true" data-size="8">
                                            <?php
                                            foreach ($currencies as $currency) {
                                                ?>
                                                <option data-content="<img class='flag' src='<?php echo $currency['flag']; ?>'> <span class='currency_code'><?php echo $currency['currency_code']; ?></span> <span class='currency_name'><?php echo $currency['currency_name']; ?></span>" 
                                                <?php
                                                if ($currency['currency_code'] == "USD") {
                                                    echo "selected";
                                                }
                                                ?> value="<?php echo $currency['currency_code']; ?>"><?php echo $currency['currency_code']; ?></option>
                                                        <?php
                                                    }
                                                    ?>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-12 col-xs-12">
                                    <label class="label"><br /></label>
                                    <div class="select text-center">
                                        <button class="exchange-btn"></button>
                                    </div>
                                </div>
                                <div class="col-md-5 col-sm-12 col-xs-12">
                                    <label class="label">To</label>
                                    <div class="select">
                                        <div class="input-wrap">
                                            <input type="text" class="form-control" name="tinpt" id="tinpt" pattern="/^-?\d*[.,]?\d{0,2}$/">
                                        </div>
                                        <select id="toCurr" name="toCurr"  data-show-subtext="true" class="selectpicker bs-select form-control" data-live-search="true" data-size="8">
                                            <?php
                                            foreach ($currencies as $currency) {
                                                ?>
                                                <option data-content="<img class='flag' src='<?php echo $currency['flag']; ?>'> <span class='currency_code'><?php echo $currency['currency_code']; ?></span> <span class='currency_name'><?php echo $currency['currency_name']; ?></span>" 
                                                <?php
                                                if ($currency['currency_code'] == "BTC") {
                                                    echo "selected";
                                                }
                                                ?> value="<?php echo $currency['currency_code']; ?>"><?php echo $currency['currency_code']; ?></option>
                                                        <?php
                                                    }
                                                    ?>
                                        </select>
                                    </div>
                                </div>	

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="list-currencies">
            <div class="container">	
                <h2 class="text-center">World currencies</h2>			
                <div class="row">		
                    <div class="col-md-6">
                        <div class="section-currencies-table">
                            <div class="table-responsive">
                                <table class="table table-striped custab table-hover">
                                    <thead>
                                        <tr>
                                            <th class="caption-col">Flag</th>
                                            <th class="caption-col">Code</th>
                                            <th class="caption-col">Currency name</th>
                                            <th class="caption-col">Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        for ($i = 0; $i < ($half); $i++) {
                                            ?>
                                            <tr>
                                                <td class="flag"><img src="<?php echo $currencies[$i]['flag']; ?>" width="24"  alt="National flag of <?php echo $currencies[$i]['country_fullname']; ?>"></td>
                                                <td><?php echo $currencies[$i]['currency_code']; ?></td>
                                                <td><?php echo $currencies[$i]['currency_name']; ?></td>
                                                <td><?php echo $currencies[$i]['country_name']; ?></td>										
                                            </tr>
                                            <?php
                                        }
                                        ?>								
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="section-currencies-table">
                            <div class="table-responsive">
                                <table class="table table-striped custab table-hover">
                                    <thead>
                                        <tr>
                                            <th class="caption-col">Flag</th>
                                            <th class="caption-col">Code</th>
                                            <th class="caption-col">Currency name</th>
                                            <th class="caption-col">Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        for ($i = $half; $i < sizeof($currencies); $i++) {
                                            ?>
                                            <tr>
                                                <td class="flag"><img src="<?php echo $currencies[$i]['flag']; ?>" width="24"  alt="National flag of <?php echo $currencies[$i]['country_fullname']; ?>"></td>
                                                <td><?php echo $currencies[$i]['currency_code']; ?></td>
                                                <td><?php echo $currencies[$i]['currency_name']; ?></td>
                                                <td><?php echo $currencies[$i]['country_name']; ?></td>										
                                            </tr>
                                            <?php
                                        }
                                        ?>	
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div class="container">	
                <div class="footer text-center">
                    <p class="copyright">Copyright &copy <?php echo date('Y'); ?> WebOasis Currency Converter</p>
                </div>
            </div>
        </footer>
    </body>
</html>