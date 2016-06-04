angular.module('presentica.controllers', [])

.controller('SignInCtrl', function($rootScope, $state) {

	$rootScope.signIn = function(user) {
		if (user.acct == user.pwd && (user.acct == '1000' || user.acct == '9999' || user.acct == '16000000000' || user.acct == '16011111111' || user.acct == '16022222222' || user.acct == '16033333333')) {
			if (user.acct == '1000') {
				$rootScope.idNumber = '1000',
					$rootScope.pic = 'img/person_assertive.png',
					$rootScope.address = '华老师'
			} else if (user.acct == '9999') {
				$rootScope.idNumber = '9999',
					$rootScope.pic = 'img/person_energized.png',
					$rootScope.address = '东老师'
			} else if (user.acct == '16000000000') {
				$rootScope.idNumber = '16000000000',
					$rootScope.pic = 'img/person_balanced.png',
					$rootScope.address = '政同学'
			} else if (user.acct == '16011111111') {
				$rootScope.idNumber = '16011111111',
					$rootScope.pic = 'img/person_calm.png',
					$rootScope.address = '法同学'
			} else if (user.acct == '16022222222') {
				$rootScope.idNumber = '16022222222',
					$rootScope.pic = 'img/person_positive.png',
					$rootScope.address = '大同学'
			} else {
				$rootScope.idNumber = '16033333333',
					$rootScope.pic = 'img/person_royal.png',
					$rootScope.address = '学同学'
			}
			if ($rootScope.idNumber.length < 5) {
				$rootScope.roleIsTch = true;
			} else {
				$rootScope.roleIsTch = false;
			};
			$state.go('tab.lesson');
		};
	}
})

.controller('RollCallCtrl', function($rootScope, $interval) {

	$rootScope.checkedStu = new Array;
	//	console.log($rootScope.checkedStu.length);
	docItem = {
		idNumber: "",
		address: "",
		checked: "（出勤/迟到/旷课/请假）"
	};
	s16000000000 = {
		idNumber: "16000000000",
		address: "政同学",
		checked: "出勤"
	};
	s16011111111 = {
		idNumber: "16011111111",
		address: "法同学",
		checked: "出勤"
	};

	$rootScope.checkedStu.push(docItem);

	$rootScope.rollCall = function() {

		// Client-side for Tch
		if ($rootScope.roleIsTch) {

			// Check if plugin is available
			cordova.plugins.hotspot.isAvailable(function(pluginIsAvailable) {

				if (pluginIsAvailable) {

					// Create a WiFi Hotspot
					cordova.plugins.hotspot.createHotspot($rootScope.address, "Open", "",
						function(successCreateHotspot) {
							$rootScope.rollCalling = true;
							// Get all connected devices
							$interval(getCheckedStu = function() {
								cordova.plugins.hotspot.getAllHotspotDevices(
									function(successGetHotspotDevices) {
										for (j = 0; j < successGetHotspotDevices.length; j++) {
											if ('90:7a:28:01:5f:98' == successGetHotspotDevices[j].mac) {
												flag = false;
												for (i = 0; i < $rootScope.checkedStu.length; i++) {
													if (s16000000000 == $rootScope.checkedStu[i]) {
														flag = true;
														break;
													}
												}
												if (!flag) {
													$rootScope.checkedStu.push(s16000000000);
												}
											} else if ('70:E7:2C:58:25:A0' == successGetHotspotDevices[j].mac) {
												flag = false;
												for (i = 0; i < $rootScope.checkedStu.length; i++) {
													if (s16011111111 == $rootScope.checkedStu[i]) {
														flag = true;
														break;
													}
												}
												if (!flag) {
													$rootScope.checkedStu.push(s16011111111);
													alert("checked Stu2");
												}
											}
										}
									},
									function(errorGetHotspotDevices) {
										alert("No one connected!");
									}
								)
							}, 45000);
						},
						function(errorCreateHotspot) {
							alert("Please try again.");
						})

				} else {
					alert("Unsupported platform for now!");
				};
			});

		}

	};

	$rootScope.doneRollCall = function() {
		cordova.plugins.hotspot.stopHotspot(function(successCB) {
				$interval.cancel(getCheckedStu);
				$rootScope.rollCalling = false;
			},
			function(errorCB) {
				alert("Please stop your hotspot manually.")
			})
	}

	// Client-side for Stu
	if (!$rootScope.roleIsTch) {

		// Check if plugin is available
		cordova.plugins.hotspot.isAvailable(function(pluginIsAvailable) {

			if (pluginIsAvailable) {

				// Connect to a WiFi Hotspot
				cordova.plugins.hotspot.connectToHotspot("华老师", "", successCB, errorCB);

			} else {
				alert("Unsupported platform for now!");
			};
		});

	}

})

.controller('LogOutCtrl', function($rootScope, $state) {

	$rootScope.logOut = function() {
		$rootScope.idNumber = '',
			$rootScope.pic = '',
			$rootScope.address = ''
		$state.go('signin');
	};
})