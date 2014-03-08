$(function () {
	
	$('figure.go-to-views').click(function () {		
		$('section.start').fadeOut('fast', function () {
			$('section.views').fadeIn('fast');
		});		
	});	
	
	$('figure.go-to-view-usuario').click(function () {		
		$('section.views').fadeOut('fast', function () {
			$('section.view-usuario').fadeIn('fast');
		});		
	});	
	
	$('figure.go-to-view-grupo').click(function () {		
		$('section.views').fadeOut('fast', function () {
			$('section.view-grupo').fadeIn('fast');
		});		
	});	
	
	$('figure.go-to-componentes').click(function () {		
		$('section.start').fadeOut('fast', function () {
			$('section.componentes').fadeIn('fast');
		});		
	});
	
	$('figure.go-to-main').click(function () {		
		$('section.start').fadeOut('fast', function () {
			$('section.main').fadeIn('fast');
		});		
	});
	
	$('img.views-to-start').click(function () {
		$('section.views').fadeOut('fast', function () {
			$('section.start').fadeIn('fast');
		});
	});
	
	$('img.view-usuario-to-views').click(function () {
		$('section.view-usuario').fadeOut('fast', function () {
			$('section.views').fadeIn('fast');
		});
	});
	
	$('img.view-grupo-to-views').click(function () {
		$('section.view-grupo').fadeOut('fast', function () {
			$('section.views').fadeIn('fast');
		});
	});
	
	$('img.main-to-start').click(function () {
		$('section.main').fadeOut('fast', function () {
			$('section.start').fadeIn('fast');
		});
	});
	
	$('img.componentes-to-start').click(function () {
		$('section.componentes').fadeOut('fast', function () {
			$('section.start').fadeIn('fast');
		});
	});
	
	// View Usuario
	
	var showDownArrowViewUsuario = function () {
		var arrow = $('.down-arrow-view-usuario');
		if (!(arrow.is(':visible')))
			$('.down-arrow-view-usuario').fadeIn('fast');
	};
	
	$('figure.show-view-usuario-elementos-children').click(function () {
		
		var showElementosChildren = function () {
			showDownArrowViewUsuario();
			$('.view-usuario-elementos-children').fadeIn('slow');
		};
	
		var jsFilesContainer = $(this)
			.closest('section')
			.children('div:last')
			.children().fadeOut('fast', showElementosChildren);
	});
	
	$('figure.show-view-usuario-viewmodel-children').click(function () {
		
		var showViewmodelChildren = function () {
			showDownArrowViewUsuario();
			$('.view-usuario-viewmodel-children').fadeIn('slow');
		};
	
		var jsFilesContainer = $(this)
			.closest('section')
			.children('div:last')
			.children().fadeOut('slow', showViewmodelChildren);
	});
	
	$('figure.show-view-usuario-script-children').click(function () {				
				
		var showUsuarioChildren = function () {			
			showDownArrowViewUsuario();
			
			var children = $('.view-usuario-script-children');
			
			if (!(children.is(':visible')))
				$('.view-usuario-script-children').fadeIn('slow');
		};
	
		var jsFilesContainers = $(this)
			.closest('section')
			.children('div:last')
			.children();
			
		jsFilesContainers.fadeOut('fast', showUsuarioChildren);
	});
});
