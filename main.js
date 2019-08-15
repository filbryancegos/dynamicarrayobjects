var annual = [
    {
        name: 'starter',
        price: 21,
        description: ['eking','brutos','amang']
    },
    {
        name: 'pro',
        price: 22,
        description: ['gerald','wendell','manong']
    },
    {
        name: 'personal',
        price: 27,
        description: ['marjune','ramon','baban']
    },
    {
        name: 'Business',
        price: 50,
        description: ['amang','brutos','amang']
    }
]

var monthly = [
    {
        name: 'starter',
        price: 21,
        description: ['eking','brutos','amang']
    },
    {
        name: 'pro',
        price: 22,
        description: ['gerald','wendell','manong']
    },
    {
        name: 'personal',
        price: 27,
        description: ['marjune','ramon','baban']
    },
    {
        name: 'Business',
        price: 50,
        description: ['amang','brutos','amang']
    }
]

var html = "<div>";
for (var i = 0; i < annual.length; i++) {
    var element = annual[i];
    var desc = element.description;

    var html2 = "<ul>";
    for (var index = 0; index < desc.length; index++) {
        var newdesc = desc[index];
        html2+="<li>"+newdesc+"</li>";
    }
    html2+="</ul>";
    
    html+="<div class='slide-item'>";
    html+="<p>"+element.name+"</p>";
    html+="<div class='description'>"+html2+"</div>";
    html+="</div>";
}

html+="</div>";
document.querySelector('.slider').innerHTML = html;





