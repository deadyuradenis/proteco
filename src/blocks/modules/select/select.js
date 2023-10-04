
import select2  from 'select2';



$('.jsSelect').each(function(){
    let thisSelect = $(this);

    thisSelect.select2(
        {
            width: '100%',
            placeholder: '',
            dropdownParent: thisSelect.closest('.select')
        }
        
    );

    let select =  $(this).closest('.select');
    
    $(this).on("select2:open", function () { 
        select.addClass('is-focus')
    });
    $(this).on("select2:close", function () { 
        select.removeClass('is-focus')
        
    });
    $(this).on("select2:select", function () { 
        select.addClass('is-filled')
        
    });
    $(this).on("select2:unselect", function () { 
        
    });
})
