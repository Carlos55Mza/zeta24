(()=>{'use strict';const provinces={
'Buenos Aires':['La Plata','Mar del Plata','Bahía Blanca','Tandil','Junín'],
'CABA':['Ciudad Autónoma de Buenos Aires'],
'Catamarca':['San Fernando del Valle de Catamarca','Belén','Tinogasta'],
'Chaco':['Resistencia','Presidencia Roque Sáenz Peña','Villa Ángela'],
'Chubut':['Rawson','Comodoro Rivadavia','Puerto Madryn','Esquel'],
'Córdoba':['Córdoba','Río Cuarto','Villa María','San Francisco'],
'Corrientes':['Corrientes','Goya','Paso de los Libres'],
'Entre Ríos':['Paraná','Concordia','Gualeguaychú'],
'Formosa':['Formosa','Clorinda','Las Lomitas'],
'Jujuy':['San Salvador de Jujuy','Palpalá','La Quiaca'],
'La Pampa':['Santa Rosa','General Pico','25 de Mayo'],
'La Rioja':['La Rioja','Chilecito','Chamical'],
'Mendoza':['Mendoza','San Martín, Mendoza','San Rafael','Tunuyán','Malargüe','General Alvear'],
'Misiones':['Posadas','Oberá','Puerto Iguazú','Eldorado'],
'Neuquén':['Neuquén','San Martín de los Andes','Zapala'],
'Río Negro':['Viedma','San Carlos de Bariloche','General Roca','Cipolletti'],
'Salta':['Salta','Tartagal','Orán','Cafayate'],
'San Juan':['San Juan','Jáchal','Caucete'],
'San Luis':['San Luis','Villa Mercedes','Merlo, San Luis'],
'Santa Cruz':['Río Gallegos','El Calafate','Caleta Olivia'],
'Santa Fe':['Santa Fe','Rosario','Rafaela','Reconquista'],
'Santiago del Estero':['Santiago del Estero','La Banda','Termas de Río Hondo'],
'Tierra del Fuego':['Ushuaia','Río Grande','Tolhuin'],
'Tucumán':['San Miguel de Tucumán','Tafí Viejo','Concepción, Tucumán']};
const prov=document.getElementById('znProvince'),city=document.getElementById('znCity'),go=document.getElementById('znShow'),grid=document.getElementById('znProvinceGrid'),status=document.getElementById('znStatus');if(!prov||!city||!go||!grid)return;
Object.keys(provinces).sort((a,b)=>a.localeCompare(b,'es')).forEach(name=>{const opt=document.createElement('option');opt.value=name;opt.textContent=name;prov.append(opt);const b=document.createElement('button');b.type='button';b.textContent=name;b.addEventListener('click',()=>{prov.value=name;prov.dispatchEvent(new Event('change'));document.getElementById('mapa-argentina').scrollIntoView({behavior:'smooth',block:'start'});});grid.append(b)});
prov.addEventListener('change',()=>{city.replaceChildren();const p=prov.value;const opt=document.createElement('option');opt.value='';opt.textContent=p?'Elegí una localidad…':'Primero elegí una provincia';city.append(opt);(provinces[p]||[]).forEach(name=>{const o=document.createElement('option');o.value=name;o.textContent=name;city.append(o)});city.disabled=!p;go.disabled=true;grid.querySelectorAll('button').forEach(b=>b.classList.toggle('selected',b.textContent===p));status.textContent=p?'Seleccioná una localidad para ver su pronóstico.':'El pronóstico se muestra en el módulo habitual de ZETA24.'});
city.addEventListener('change',()=>{go.disabled=!city.value});go.addEventListener('click',()=>{const form=document.getElementById('cityForm'),input=document.getElementById('citySearch');if(!form||!input){status.textContent='El buscador meteorológico no está disponible en este momento.';return}input.value=city.value.includes(',')?city.value:city.value+', '+prov.value+', Argentina';document.getElementById('pronostico').scrollIntoView({behavior:'smooth',block:'start'});if(form.requestSubmit)form.requestSubmit();else form.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));status.textContent='Consulta enviada al buscador meteorológico de ZETA24.'});
})();