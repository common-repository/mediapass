MM = typeof MM === 'undefined' ? {} : MM;
MM.FE = typeof MM.FE === 'undefined' ? {} : MM.FE;
MM.FE.UI = typeof MM.FE.UI === 'undefined' ? {} : MM.FE.UI;

MM.FE.UI.Dashboard = function (config) {
    var origConfig = {

       urls: {
            getChartData: 'http://api.mediapass.com/v1/reporting/chart/'
        }, 
        actions: {
            statsButton: '#stats_select',
            chartButton: '#charts_select'
        },
        elements: {
            statsDaily: '#stats_daily',
            statsMonthly: '#stats_monthly',
            statsYearly: '#stats_yearly'
        }
    };

    var cfg = $.extend({}, origConfig, config);

    var ecpmList = [], impressionList = [], saleList = [];
    var impressionTicks = [], ecpmTicks = [], saleTickets = [];

    var afterGetData = function (data) {
        ecpmList = [];
        ecpmTicks = [];

        impressionList = [];
        impressionTicks = [];

        saleList = [];
        saleTickets = [];
         
         $.each(data.Msg.EcpmList, function (i, n) {
            ecpmTicks.push(n["Time"]);
            ecpmList.push(n["Amount"]);
        });

        $.each(data.Msg.ImpreList, function (i, n) {
            impressionTicks.push(n["Time"]);
            impressionList.push(n["Amount"]);
        });

        $.each(data.Msg.SaleList, function (i, n) {
            saleTickets.push(n["Time"]);
            saleList.push(n["Amount"]);
        });

        $('#chart_ecpm').empty();

        $.jqplot('chart_ecpm', [ecpmList], {

            seriesDefaults: {
                renderer: $.jqplot.BarRenderer,
                rendererOptions: { fillToZero: true }
            },

            series: [
                    { label: 'ECPM' }
                ],

            legend: {
                show: true,
                placement: 'outsideGrid'
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: ecpmTicks
                },
                 yaxis: {
                    pad: 1.05,
                    tickOptions: { formatString: '$%d' }
                }
            }
        });

        $('#chart_sales').empty();

        $.jqplot('chart_sales', [saleList], {

            seriesDefaults: {
                renderer: $.jqplot.BarRenderer,
                rendererOptions: { fillToZero: true }
            },

            series: [
                    { label: 'Sales' }
                ],

            legend: {
                show: true,
                placement: 'outsideGrid'
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: saleTickets
                },
                yaxis: {
                    pad: 1.05
                }
            }
        });

        $('#chart_impressions').empty();

        $.jqplot('chart_impressions', [impressionList], {
            // The "seriesDefaults" option is an options object that will
            // be applied to all series in the chart.
            seriesDefaults: {
                renderer: $.jqplot.BarRenderer,
                rendererOptions: { fillToZero: true }
            },
            // Custom labels for the series are specified with the "label"
            // option on the series option.  Here a series option object
            // is specified for each series.
            series: [
                    { label: 'impressions' }
                ],
            // Show the legend and put it outside the grid, but inside the
            // plot container, shrinking the grid to accomodate the legend.
            // A value of "outside" would not shrink the grid and allow
            // the legend to overflow the container.
            legend: {
                show: true,
                placement: 'outsideGrid'
            },
            axes: {
                // Use a category axis on the x axis and use our custom ticks.
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: impressionTicks
                },
                // Pad the y axis just a little so bars can get close to, but
                // not touch, the grid boundaries.  1.2 is the default padding.
                yaxis: {
                    pad: 1.05 
                }
            }
        });
    };

    var getData = function () {

        var id = $(cfg.actions.chartButton).val();
        console.log(id);
		
		
		if(id == 1) {
			afterGetData(monthly_data);
		}
		else {
			afterGetData(yearly_data);
		}
        /*$.ajax({
            type: 'GET',
            dataType: 'json',
            url: cfg.urls.getChartData + id,
            contentType: 'application/json',
            success: function (datum) {
                if (datum.Status == "Success") {
                    afterGetData(datum);
                }
            }
        });*/
    };

    var switchStats = function () {
        switch ($(this).val()) {
            case '1':
                $(cfg.elements.statsMonthly).hide();
                $(cfg.elements.statsYearly).hide();
                $(cfg.elements.statsDaily).show().fadeIn("slow");
                break;
            case '2':
                $(cfg.elements.statsDaily).hide();
                $(cfg.elements.statsYearly).hide();
                $(cfg.elements.statsMonthly).show().fadeIn("slow");
                break;
            case '3':
                $(cfg.elements.statsDaily).hide();
                $(cfg.elements.statsMonthly).hide();
                $(cfg.elements.statsYearly).show().fadeIn("slow");
                break;
            default:
                $(cfg.elements.statsMonthly).hide();
                $(cfg.elements.statsYearly).hide();
                $(cfg.elements.statsDaily).show().fadeIn("slow");
        }
        //console.log(id);
    };

    var initSetting = function () {
        getData();
        $(cfg.elements.statsMonthly).hide();
        $(cfg.elements.statsYearly).hide();
    };

    var init = function () {
        $(document).ready(function ($) {
            initSetting();
            $(cfg.actions.statsButton).change(switchStats);
            $(cfg.actions.chartButton).change(getData);
        });
    };

    return {
        init: init
    };

};