let shp
void 0 === shp && (shp = {
  l: {
    'shop': '',
    'country': '',
    'theme': '',
    'locate': '',
    'currency': '',
    'iti': null,
    'cssButton': `.shp_btn-buy{position:relative;width:100%;background:#333;color:#ccc;height:60px;border:0;font-size:18px;border-radius:4px;font-family:"Raleway",sans-serif;transition:.6s;overflow:hidden;cursor:pointer}.shp_btn-buy:before{content:"";display:block;position:absolute;background:rgba(255,255,255,0.5);width:60px;height:100%;left:0;top:0;opacity:.5;filter:blur(30px);transform:translateX(-100px) skewX(-15deg)}.shp_btn-buy:after{content:"";display:block;position:absolute;background:rgba(255,255,255,0.2);width:30px;height:100%;left:30px;top:0;opacity:0;filter:blur(5px);transform:translateX(-100px) skewX(-15deg)}.shp_btn-buy:hover{background:#338033;cursor:pointer}.shp_btn-buy:hover:before{transform:translateX(300px) skewX(-15deg);opacity:.6;transition:.7s}.shp_btn-buy:hover:after{transform:translateX(300px) skewX(-15deg);opacity:1;transition:.7s}`,

    'cssPopup': `.hidden{display:none}.block{display:block}.container_modal_shp{overflow-y:auto;overflow-x:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:50}.container_modal_flex{display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:16px 16px 80px}.container_modal_bg{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(55,65,81,0.75);display:block!important}.container_modal_space{display:none}.container_content_modal{display:inline-block;vertical-align:bottom;background-color:#FFF;border-radius:8px;text-align:left;overflow:hidden;box-shadow:0 20px 25px -5px #000000,0 8px 10px -6px #000;transform:matrix(1,0,0,1,0,0);transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms;width:100%}.container_content{position:relative;background-color:#FFF;border-radius:8px;box-shadow:0 1px 3px 0 #000 0 1px 2px -1px #000}.close_modal{position:absolute;top:12px;right:10px;color:#9CA38F;background-color:transparent;border-radius:8px;font-size:14px;line-height:20px;padding:6px;margin-left:auto;display:inline-flex;align-items:center;cursor:pointer;border:none}.close_modal:hover{color:#111827;background-color:#E5E7EB}.close_modal-svg{width:20px;height:20px}.close_modal-span{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.modal_content_wrapper{padding:24px}.modal_content_wrapper-shadow{margin-bottom:14px;box-shadow:0 0 #0000,0 0 #0000,0 0 #0000,0 10px 15px -3px #000 0 4px 6px -4px #000}.cart_title{border:1px solid #D1D5DB;border-top-left-radius:6px;border-top-right-radius:6px;border-color:#D1D5DB;margin-top:24px;padding:16px;display:flex;flex-direction:row;cursor:pointer}.columns_cart{columns:2}.col_cart{display:flex;flex-direction:column}.cart_title_name{display:flex;justify-content:flex-start}.cart_title_total{display:flex;justify-content:flex-end;font-weight:600;font-size:18px;line-height:28px}.cart_content{border:1px solid #D1D5DB;border-bottom-left-radius:6px;border-bottom-right-radius:6px;display:flex;flex-direction:column;padding:16px}.products_container{display:flex;flex-direction:column}.cart_calculate{display:flex;flex-direction:column}.cart_calculate_p{font-size:14px;line-height:20px;font-weight:300}.cart_calculate-mr{display:flex;flex-direction:column;margin-right:16px;margin-right:20px}.cart_calculate-mr--p{font-size:14px;line-height:20px;font-weight:600;display:flex;justify-content:flex-end}.cart_calculate--p{font-size:16px;line-height:24px;font-weight:600}.checkout_form{margin-top:12px}@media (min-width: 640px){.container_modal_flex{display:block;padding:0}.container_modal_space{display:inline-block;vertical-align:middle;height:100vh}.container_content_modal{margin-top:32px;margin-bottom:32px;vertical-align:middle;max-width:512px}}@media (min-width: 1024px){.modal_content_wrapper{padding-left:32px;padding-right:32px}}.f_title{margin-bottom:16px;font-size:18px;line-height:28px;font-weight:400;color:#111827}.f_input--text{border-width:1px;border-color:#D1D5DB;border-radius:4px;color:#111827;font-size:14px;line-height:20px;display:block;width:100%;padding:10px;margin-top:calc(12px * calc(1 - 0));margin-bottom:calc(12px * calc(1 - 0))}.f_input--text:focus{border-color:#3B82F6}.f_input--checkbox{width:16px;height:16px;background-color:#F9FAFB;accent-color:#000;border-radius:2px;border-width:1px;border-color:#000}.f_input--checkbox:focus{border-color:#000}.f_input--checkbox:hover{border-color:#000}.f_label--checkbox{margin-left:8px;font-size:14px;line-height:20px;font-weight:200;color:#111827}.f_btn_submit{width:100%;color:#FFF;background-color:#1D4ED8;font-weight:500;border-radius:8px;font-size:14px;line-height:20px;text-align:center;padding:10px 20px}.f_btn_submit:hover{background-color:#1E40AF;cursor:pointer}.f_btn_submit:focus{box-shadow:0 0 0 0 4px #93C5FD;outline:2px solid transparent;outline-offset:2px}.f_checkbox{display:flex;align-items:flex-start}.f_checkbox_div{display:flex;align-items:center;height:20px}.f_cart_title{color:#1D4ED8}.f_cart_bg{background-color:#EFF6FF}.f_product_div{display:flex;align-content:flex-start}.f_product_img{position:relative}.f_product_qt{display:inline-flex;position:absolute;top:-8px;right:-8px;justify-content:center;align-items:center;width:24px;height:24px;font-size:12px;line-height:16px;font-weight:700;color:#FFF;background-color:#6B7280;border-radius:9999px}.f_product_img-shadow{border:1px solid#9CA3AF;height:64px;width:64px;box-shadow:rgba(0,0,0,0.05) 0 6px 24px 0px,rgba(0,0,0,0.08) 0 0 0 1px;max-width:100%}.f_product_name-div{margin-left:16px}.f_product_title-p{font-size:16px;line-height:24px;font-weight:600}.f_product_variant-p{font-size:14px;line-height:20px;color:#6B7280;margin:0}.f_product_price-p{font-size:14px;line-height:20px;font-weight:600;display:flex;justify-content:flex-end;margin-right:20px}.w_full_phone{width:100%}.border_error{border-color:#F87171}.label_error{border-color:#F87171;font-size:14px;line-height:20px;font-weight:400}hr{display:block;color:#000;width:100%}`,


    'settings':
    {
      "logo": {
        "active": false,
        "url": "https://dashboard.shopwin.io/assets/shopwin-logo.067d090f.png",
        "position": "center",
        "size": "large"
      },

      "form": {
        elements: [
          {
            order: 1,
            id: 'title-1',
            title: 'Contact Information',
            type: 'TITLE',
            classes: 'f_title',
          },
          {
            order: 2,
            id: 'email',
            label: 'Email',
            placeholder: 'Email',
            state: 'REQUIRED',
            type: 'EMAIL',
            floatingLabel: true,
            errorFeed: 'Email no valido',
            classes: 'f_input--text',
          },
          {
            order: 3,
            id: 'title-2',
            title: 'Shipping Address',
            type: 'TITLE',
            classes: 'f_title',
          },
          {
            order: 4,
            id: 'name',
            label: 'Name',
            state: 'REQUIRED',
            type: 'TEXT',
            placeholder: 'Name',
            floatingLabel: true,
            errorFeed: 'Must provide your name.',
            classes: 'f_input--text',
          },
          {
            order: 4,
            id: 'lastname',
            label: 'Lastname',
            state: 'REQUIRED',
            type: 'TEXT',
            placeholder: 'Lastname',
            floatingLabel: true,
            errorFeed: 'Must provide your lastname.',
            classes: 'f_input--text',
          },
          {
            order: 5,
            id: 'company',
            label: 'Company',
            state: 'OPTIONAL',
            type: 'TEXT',
            placeholder: 'Company',
            floatingLabel: true,
            errorFeed: 'Company required',
            classes: 'f_input--text',
          },
          {
            order: 6,
            id: 'line1',
            label: 'Address',
            state: 'REQUIRED',
            type: 'TEXT',
            placeholder: 'Address',
            floatingLabel: true,
            errorFeed: 'Address required',
            classes: 'f_input--text',
          },
          {
            order: 7,
            id: 'line2',
            label: 'Address',
            state: 'OPTIONAL',
            type: 'TEXT',
            placeholder: 'Apartment, suite, etc. (optional)',
            floatingLabel: true,
            errorFeed: 'Line 2 of your address required.',
            classes: 'f_input--text',
          },
          {
            order: 8,
            id: 'city',
            label: 'City',
            state: 'REQUIRED',
            type: 'TEXT',
            placeholder: 'City',
            floatingLabel: true,
            errorFeed: 'City required.',
            classes: 'f_input--text',
          },
          {
            order: 9,
            id: 'address',
            label: 'Address',
            state: 'REQUIRED',
            type: 'ADDRESS',
            countryErrorFeed: 'Country required.',
            provinceErrorFeed: 'Province required.',
            postalErrorFeed: 'zip code required.',
            classes: 'f_input--text',
            zipPlaceholder: 'Zip Code',
          },
          {
            order: 10,
            id: 'phone',
            label: 'Phone Number',
            state: 'REQUIRED',
            type: 'PHONE',
            errorFeed: 'Invalid Phone',
            classes: 'f_input--text',
          },
          {
            order: 11,
            id: 'terms',
            label: 'Save information for later',
            state: 'OPTIONAL',
            type: 'CHECKBOX',
            errorFeed: 'Debes aceptar terminos',
            inputClasses: 'f_input--checkbox',
            labelClasses: 'f_label--checkbox',
          },
          {
            order: 12,
            id: 'hl-1',
            type: 'LINE',
          },
          {
            order: 13,
            id: 'submit-button',
            label: 'Buy Now',
            type: 'SUBMIT',
            classes: 'f_btn_submit',
          },
        ],
      }
    },
    'countryConfig': [
      {
        country: 'Select Country',
        iso2: '',
        provinces: [],
        zip: false,
        zipLabel: '',
        sizeClass: '',
      },
      {
        country: 'Afghanistan',
        iso2: 'af',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Aland Islands',
        iso2: 'ax',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Albania',
        iso2: 'al',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Algeria',
        iso2: 'dz',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Andorra',
        iso2: 'ad',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Angola',
        iso2: 'ao',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Anguilla',
        iso2: 'ai',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Antigua And Barbuda',
        iso2: 'ag',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Argentina',
        iso2: 'ar',
        provinces: [
          { text: 'Province', value: '' },
          { text: 'Buenos Aires', value: 'B' },
          { text: 'Catamarca', value: 'K' },
          { text: 'Chaco', value: 'H' },
          { text: 'Chubut', value: 'U' },
          { text: 'Ciudad Autónoma de Buenos Aires', value: 'C' },
          { text: 'Córdoba', value: 'X' },
          { text: 'Corrientes', value: 'W' },
          { text: 'Entre Ríos', value: 'E' },
          { text: 'Formosa', value: 'P' },
          { text: 'Jujuy', value: 'Y' },
          { text: 'La Pampa', value: 'L' },
          { text: 'La Rioja', value: 'F' },
          { text: 'Mendoza', value: 'M' },
          { text: 'Misiones', value: 'N' },
          { text: 'Neuquén', value: 'Q' },
          { text: 'Río Negro', value: 'R' },
          { text: 'Salta', value: 'A' },
          { text: 'San Juan', value: 'J' },
          { text: 'San Luis', value: 'D' },
          { text: 'Santa Cruz', value: 'Z' },
          { text: 'Santa Fe', value: 'S' },
          { text: 'Santiago Del Estero', value: 'G' },
          { text: 'Tierra Del Fuego', value: 'V' },
          { text: 'Tucumán', value: 'T' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Armenia',
        iso2: 'am',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Aruba',
        iso2: 'aw',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Australia',
        iso2: 'au',
        provinces: [
          { text: 'State/Territory', value: '' },
          { text: 'Australian Capital Territory', value: 'ACT' },
          { text: 'New South Wales', value: 'NSW' },
          { text: 'Northern Territory', value: 'NT' },
          { text: 'Queensland', value: 'QLD' },
          { text: 'South Australia', value: 'SA' },
          { text: 'Tasmania', value: 'TAS' },
          { text: 'Victoria', value: 'VIC' },
          { text: 'Western Australia', value: 'WA' },
        ],
        zip: true,
        zipLabel: 'Postcode',
        sizeClass: 'field--third',
      },
      {
        country: 'Austria',
        iso2: 'at',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Azerbaijan',
        iso2: 'az',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Bahamas',
        iso2: 'bs',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Bahrain',
        iso2: 'bh',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Bangladesh',
        iso2: 'bd',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Barbados',
        iso2: 'bb',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Belarus',
        iso2: 'by',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Belgium',
        iso2: 'be',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Belize',
        iso2: 'bz',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Benin',
        iso2: 'bj',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Bermuda',
        iso2: 'bm',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Bhutan',
        iso2: 'bt',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Bolivia',
        iso2: 'bo',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Bosnia And Herzegovina',
        iso2: 'ba',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Botswana',
        iso2: 'bw',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Bouvet Island',
        iso2: '',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Brazil',
        iso2: 'br',
        provinces: [
          { text: 'State', value: '' },
          { text: 'Acre', value: 'AC' },
          { text: 'Alagoas', value: 'AL' },
          { text: 'Amapá', value: 'AP' },
          { text: 'Amazonas', value: 'AM' },
          { text: 'Bahia', value: 'BA' },
          { text: 'Ceará', value: 'CE' },
          { text: 'Distrito Federal', value: 'DF' },
          { text: 'Espírito Santo', value: 'ES' },
          { text: 'Goiás', value: 'GO' },
          { text: 'Maranhão', value: 'MA' },
          { text: 'Mato Grosso', value: 'MT' },
          { text: 'Mato Grosso do Sul', value: 'MS' },
          { text: 'Minas Gerais', value: 'MG' },
          { text: 'Pará', value: 'PA' },
          { text: 'Paraíba', value: 'PB' },
          { text: 'Paraná', value: 'PR' },
          { text: 'Pernambuco', value: 'PE' },
          { text: 'Piauí', value: 'PI' },
          { text: 'Rio Grande do Norte', value: 'RN' },
          { text: 'Rio Grande do Sul', value: 'RS' },
          { text: 'Rio de Janeiro', value: 'RJ' },
          { text: 'Rondônia', value: 'RO' },
          { text: 'Roraima', value: 'RR' },
          { text: 'Santa Catarina', value: 'SC' },
          { text: 'São Paulo', value: 'SP' },
          { text: 'Sergipe', value: 'SE' },
          { text: 'Tocantins', value: 'TO' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'British Indian Ocean Territory',
        iso2: 'io',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Virgin Islands,  British',
        iso2: 'vg',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Brunei',
        iso2: 'bn',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Bulgaria',
        iso2: 'bg',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Burkina Faso',
        iso2: 'bf',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Burundi',
        iso2: 'bi',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Cambodia',
        iso2: 'kh',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Republic of Cameroon',
        iso2: 'cm',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Canada',
        iso2: 'ca',
        provinces: [
          { text: 'Province', value: '' },
          { text: 'Alberta', value: 'AB' },
          { text: 'British Columbia', value: 'BC' },
          { text: 'Manitoba', value: 'MB' },
          { text: 'New Brunswick', value: 'NB' },
          { text: 'Newfoundland and Labrador', value: 'NL' },
          { text: 'Northwest Territories', value: 'NT' },
          { text: 'Nova Scotia', value: 'NS' },
          { text: 'Nunavut', value: 'NU' },
          { text: 'Ontario', value: 'ON' },
          { text: 'Prince Edward Island', value: 'PE' },
          { text: 'Quebec', value: 'QC' },
          { text: 'Saskatchewan', value: 'SK' },
          { text: 'Yukon', value: 'YT' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Cape Verde',
        iso2: 'cv',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Bonaire,  Sint Eustatius and Saba',
        iso2: 'bq',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Cayman Islands',
        iso2: 'ky',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Central African Republic',
        iso2: 'cf',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Chad',
        iso2: 'td',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Chile',
        iso2: 'cl',
        provinces: [
          { text: 'Province', value: '' },
          { text: 'Antofagasta', value: 'AN' },
          { text: 'Araucanía', value: 'AR' },
          { text: 'Arica and Parinacota', value: 'AP' },
          { text: 'Atacama', value: 'AT' },
          { text: 'Aysén', value: 'AI' },
          { text: 'Biobío', value: 'BI' },
          { text: 'Coquimbo', value: 'CO' },
          { text: 'Los Lagos', value: 'LL' },
          { text: 'Los Ríos', value: 'LR' },
          { text: 'Magallanes', value: 'MA' },
          { text: 'Maule', value: 'ML' },
          { text: 'Ñuble', value: 'NB' },
          { text: "O'Higgins", value: 'LI' },
          { text: 'Santiago', value: 'RM' },
          { text: 'Tarapacá', value: 'TA' },
          { text: 'Valparaíso', value: 'VS' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'China',
        iso2: 'cn',
        provinces: [
          { text: 'Province', value: '' },
          { text: 'Anhui', value: 'AH' },
          { text: 'Beijing', value: 'BJ' },
          { text: 'Chongqing', value: 'CQ' },
          { text: 'Fujian', value: 'FJ' },
          { text: 'Gansu', value: 'GS' },
          { text: 'Guangdong', value: 'GD' },
          { text: 'Guangxi', value: 'GX' },
          { text: 'Guizhou', value: 'GZ' },
          { text: 'Hainan', value: 'HI' },
          { text: 'Hebei', value: 'HE' },
          { text: 'Heilongjiang', value: 'HL' },
          { text: 'Henan', value: 'HA' },
          { text: 'Hubei', value: 'HB' },
          { text: 'Hunan', value: 'HN' },
          { text: 'Inner Mongolia', value: 'NM' },
          { text: 'Jiangsu', value: 'JS' },
          { text: 'Jiangxi', value: 'JX' },
          { text: 'Jilin', value: 'JL' },
          { text: 'Liaoning', value: 'LN' },
          { text: 'Ningxia', value: 'NX' },
          { text: 'Qinghai', value: 'QH' },
          { text: 'Shaanxi', value: 'SN' },
          { text: 'Shandong', value: 'SD' },
          { text: 'Shanghai', value: 'SH' },
          { text: 'Shanxi', value: 'SX' },
          { text: 'Sichuan', value: 'SC' },
          { text: 'Tianjin', value: 'TJ' },
          { text: 'Xinjiang', value: 'XJ' },
          { text: 'Xizang', value: 'YZ' },
          { text: 'Yunnan', value: 'YN' },
          { text: 'Zhejiang', value: 'ZJ' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Christmas Island',
        iso2: 'cx',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Cocos (Keeling) Islands',
        iso2: 'cc',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Colombia',
        iso2: 'co',
        provinces: [
          { text: 'Province', value: '' },
          { text: 'Bogotá,  D.C.', value: 'DC' },
          { text: 'Amazonas', value: 'AMA' },
          { text: 'Antioquia', value: 'ANT' },
          { text: 'Arauca', value: 'ARA' },
          { text: 'Atlántico', value: 'ATL' },
          { text: 'Bolívar', value: 'BOL' },
          { text: 'Boyacá', value: 'BOY' },
          { text: 'Caldas', value: 'CAL' },
          { text: 'Caquetá', value: 'CAQ' },
          { text: 'Casanare', value: 'CAS' },
          { text: 'Cauca', value: 'CAU' },
          { text: 'Cesar', value: 'CES' },
          { text: 'Chocó', value: 'CHO' },
          { text: 'Córdoba', value: 'COR' },
          { text: 'Cundinamarca', value: 'CUN' },
          { text: 'Guainía', value: 'GUA' },
          { text: 'Guaviare', value: 'GUV' },
          { text: 'Huila', value: 'HUI' },
          { text: 'La Guajira', value: 'LAG' },
          { text: 'Magdalena', value: 'MAG' },
          { text: 'Meta', value: 'MET' },
          { text: 'Nariño', value: 'NAR' },
          { text: 'Norte de Santander', value: 'NSA' },
          { text: 'Putumayo', value: 'PUT' },
          { text: 'Quindío', value: 'QUI' },
          { text: 'Risaralda', value: 'RIS' },
          { text: 'San Andrés,  Providencia y Santa Catalina', value: 'SAP' },
          { text: 'Santander', value: 'SAN' },
          { text: 'Sucre', value: 'SUC' },
          { text: 'Tolima', value: 'TOL' },
          { text: 'Valle del Cauca', value: 'VAC' },
          { text: 'Vaupés', value: 'VAU' },
          { text: 'Vichada', value: 'VID' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Comoros',
        iso2: 'km',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Congo',
        iso2: 'cd',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Congo,  The Democratic Republic Of The',
        iso2: 'cg',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Cook Islands',
        iso2: 'ck',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Costa Rica',
        iso2: 'cr',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Croatia',
        iso2: 'hr',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Cuba',
        iso2: 'cu',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Curaçao',
        iso2: 'cw',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Cyprus',
        iso2: 'cy',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Czech Republic',
        iso2: 'cz',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: "Côte d'Ivoire",
        iso2: 'ci',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Denmark',
        iso2: 'dk',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Djibouti',
        iso2: 'dj',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Dominica',
        iso2: 'dm',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Dominican Republic',
        iso2: 'do',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Ecuador',
        iso2: 'ec',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Egypt',
        iso2: 'eg',
        provinces: [
          { text: 'Governorate', value: '' },
          { text: '6th of October', value: 'SU' },
          { text: 'Al Sharqia', value: 'SHR' },
          { text: 'Alexandria', value: 'ALX' },
          { text: 'Aswan', value: 'ASN' },
          { text: 'Asyut', value: 'AST' },
          { text: 'Beheira', value: 'BH' },
          { text: 'Beni Suef', value: 'BNS' },
          { text: 'Cairo', value: 'C' },
          { text: 'Dakahlia', value: 'DK' },
          { text: 'Damietta', value: 'DT' },
          { text: 'Faiyum', value: 'FYM' },
          { text: 'Gharbia', value: 'GH' },
          { text: 'Giza', value: 'GZ' },
          { text: 'Helwan', value: 'HU' },
          { text: 'Ismailia', value: 'IS' },
          { text: 'Kafr el-Sheikh', value: 'KFS' },
          { text: 'Luxor', value: 'LX' },
          { text: 'Matrouh', value: 'MT' },
          { text: 'Minya', value: 'MN' },
          { text: 'Monufia', value: 'MNF' },
          { text: 'New Valley', value: 'WAD' },
          { text: 'North Sinai', value: 'SIN' },
          { text: 'Port Said', value: 'PTS' },
          { text: 'Qalyubia', value: 'KB' },
          { text: 'Qena', value: 'KN' },
          { text: 'Red Sea', value: 'BA' },
          { text: 'Sohag', value: 'SHG' },
          { text: 'South Sinai', value: 'JS' },
          { text: 'Suez', value: 'SUZ' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'El Salvador',
        iso2: 'sv',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Equatorial Guinea',
        iso2: 'gq',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Eritrea',
        iso2: 'er',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Estonia',
        iso2: 'ee',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Ethiopia',
        iso2: 'et',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Falkland Islands (Malvinas)',
        iso2: 'fk',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Faroe Islands',
        iso2: 'fo',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Fiji',
        iso2: 'fj',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Finland',
        iso2: 'fi',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'France',
        iso2: 'fr',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'French Guiana',
        iso2: 'gf',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'French Polynesia',
        iso2: 'pf',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'French Southern Territories',
        iso2: 'tf',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Gabon',
        iso2: 'ga',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Gambia',
        iso2: 'gm',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Georgia',
        iso2: 'ge',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Germany',
        iso2: 'de',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Ghana',
        iso2: 'gh',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Gibraltar',
        iso2: 'gi',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Greece',
        iso2: 'gr',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Greenland',
        iso2: 'gl',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Grenada',
        iso2: 'gd',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Guadeloupe',
        iso2: 'gp',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Guatemala',
        iso2: 'gt',
        provinces: [
          { text: 'Region', value: '' },
          { text: 'Alta Verapaz', value: 'AVE' },
          { text: 'Baja Verapaz', value: 'BVE' },
          { text: 'Chimaltenango', value: 'CMT' },
          { text: 'Chiquimula', value: 'CQM' },
          { text: 'El Progreso', value: 'EPR' },
          { text: 'Escuintla', value: 'ESC' },
          { text: 'Guatemala', value: 'GUA' },
          { text: 'Huehuetenango', value: 'HUE' },
          { text: 'Izabal', value: 'IZA' },
          { text: 'Jalapa', value: 'JAL' },
          { text: 'Jutiapa', value: 'JUT' },
          { text: 'Petén', value: 'PET' },
          { text: 'Quetzaltenango', value: 'QUE' },
          { text: 'Quiché', value: 'QUI' },
          { text: 'Retalhuleu', value: 'RET' },
          { text: 'Sacatepéquez', value: 'SAC' },
          { text: 'San Marcos', value: 'SMA' },
          { text: 'Santa Rosa', value: 'SRO' },
          { text: 'Sololá', value: 'SOL' },
          { text: 'Suchitepéquez', value: 'SUC' },
          { text: 'Totonicapán', value: 'TOT' },
          { text: 'Zacapa', value: 'ZAC' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Guernsey',
        iso2: 'gg',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Guinea',
        iso2: 'gn',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Guinea Bissau',
        iso2: 'gw',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Guyana',
        iso2: 'gy',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Haiti',
        iso2: 'ht',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Heard Island And Mcdonald Islands',
        iso2: 'hm',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Honduras',
        iso2: 'hn',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Hong Kong',
        iso2: 'hk',
        provinces: [
          { text: 'Region', value: '' },
          { text: 'Hong Kong Island', value: 'HK' },
          { text: 'Kowloon', value: 'KL' },
          { text: 'New Territories', value: 'NT' },
        ],
        zip: false,
        zipLabel: null,
        sizeClass: 'field--half',
      },
      {
        country: 'Hungary',
        iso2: 'hu',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Iceland',
        iso2: 'is',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'India',
        iso2: 'in',
        provinces: [
          { text: 'State', value: '' },
          { text: 'Andaman and Nicobar', value: 'AN' },
          { text: 'Andhra Pradesh', value: 'AP' },
          { text: 'Arunachal Pradesh', value: 'AR' },
          { text: 'Assam', value: 'AS' },
          { text: 'Bihar', value: 'BR' },
          { text: 'Chandigarh', value: 'CH' },
          { text: 'Chattisgarh', value: 'CG' },
          { text: 'Dadra and Nagar Haveli', value: 'DN' },
          { text: 'Daman and Diu', value: 'DD' },
          { text: 'Delhi', value: 'DL' },
          { text: 'Goa', value: 'GA' },
          { text: 'Gujarat', value: 'GJ' },
          { text: 'Haryana', value: 'HR' },
          { text: 'Himachal Pradesh', value: 'HP' },
          { text: 'Jammu and Kashmir', value: 'JK' },
          { text: 'Jharkhand', value: 'JH' },
          { text: 'Karnataka', value: 'KA' },
          { text: 'Kerala', value: 'KL' },
          { text: 'Lakshadweep', value: 'LD' },
          { text: 'Madhya Pradesh', value: 'MP' },
          { text: 'Maharashtra', value: 'MH' },
          { text: 'Manipur', value: 'MN' },
          { text: 'Meghalaya', value: 'ML' },
          { text: 'Mizoram', value: 'MZ' },
          { text: 'Nagaland', value: 'NL' },
          { text: 'Orissa', value: 'OR' },
          { text: 'Puducherry', value: 'PY' },
          { text: 'Punjab', value: 'PB' },
          { text: 'Rajasthan', value: 'RJ' },
          { text: 'Sikkim', value: 'SK' },
          { text: 'Tamil Nadu', value: 'TN' },
          { text: 'Telangana', value: 'TS' },
          { text: 'Tripura', value: 'TR' },
          { text: 'Uttar Pradesh', value: 'UP' },
          { text: 'Uttarakhand', value: 'UK' },
          { text: 'West Bengal', value: 'WB' },
        ],
        zip: true,
        zipLabel: 'PIN code',
        sizeClass: 'field--third',
      },
      {
        country: 'Indonesia',
        iso2: 'id',
        provinces: [
          { text: 'Province', value: '' },
          { text: 'Aceh', value: 'AC' },
          { text: 'Bali', value: 'BA' },
          { text: 'Bangka Belitung', value: 'BB' },
          { text: 'Banten', value: 'BT' },
          { text: 'Bengkulu', value: 'BE' },
          { text: 'Gorontalo', value: 'GO' },
          { text: 'Jakarta', value: 'JK' },
          { text: 'Jambi', value: 'JA' },
          { text: 'Jawa Barat', value: 'JB' },
          { text: 'Jawa Tengah', value: 'JT' },
          { text: 'Jawa Timur', value: 'JI' },
          { text: 'Kalimantan Barat', value: 'KB' },
          { text: 'Kalimantan Selatan', value: 'KS' },
          { text: 'Kalimantan Tengah', value: 'KT' },
          { text: 'Kalimantan Timur', value: 'KI' },
          { text: 'Kalimantan Utara', value: 'KU' },
          { text: 'Kepulauan Riau', value: 'KR' },
          { text: 'Lampung', value: 'LA' },
          { text: 'Maluku', value: 'MA' },
          { text: 'Maluku Utara', value: 'MU' },
          { text: 'Nusa Tenggara Barat', value: 'NB' },
          { text: 'Nusa Tenggara Timur', value: 'NT' },
          { text: 'Papua', value: 'PA' },
          { text: 'Papua Barat', value: 'PB' },
          { text: 'Riau', value: 'RI' },
          { text: 'Sulawesi Barat', value: 'SR' },
          { text: 'Sulawesi Selatan', value: 'SN' },
          { text: 'Sulawesi Tengah', value: 'ST' },
          { text: 'Sulawesi Tenggara', value: 'SG' },
          { text: 'Sulawesi Utara', value: 'SA' },
          { text: 'Sumatra Barat', value: 'SB' },
          { text: 'Sumatra Selatan', value: 'SS' },
          { text: 'Sumatra Utara', value: 'SU' },
          { text: 'Yogyakarta', value: 'YO' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Iran,  Islamic Republic Of',
        iso2: 'ir',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Iraq',
        iso2: 'iq',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Ireland',
        iso2: 'ie',
        provinces: [
          { text: 'County', value: '' },
          { text: 'Carlow', value: 'CW' },
          { text: 'Cavan', value: 'CN' },
          { text: 'Clare', value: 'CE' },
          { text: 'Cork', value: 'CO' },
          { text: 'Donegal', value: 'DL' },
          { text: 'Dublin', value: 'D' },
          { text: 'Galway', value: 'G' },
          { text: 'Kerry', value: 'KY' },
          { text: 'Kildare', value: 'KE' },
          { text: 'Kilkenny', value: 'KK' },
          { text: 'Laois', value: 'LS' },
          { text: 'Leitrim', value: 'LM' },
          { text: 'Limerick', value: 'LK' },
          { text: 'Longford', value: 'LD' },
          { text: 'Louth', value: 'LH' },
          { text: 'Mayo', value: 'MO' },
          { text: 'Meath', value: 'MH' },
          { text: 'Monaghan', value: 'MN' },
          { text: 'Offaly', value: 'OY' },
          { text: 'Roscommon', value: 'RN' },
          { text: 'Sligo', value: 'SO' },
          { text: 'Tipperary', value: 'TA' },
          { text: 'Waterford', value: 'WD' },
          { text: 'Westmeath', value: 'WH' },
          { text: 'Wexford', value: 'WX' },
          { text: 'Wicklow', value: 'WW' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Isle Of Man',
        iso2: 'im',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Israel',
        iso2: 'il',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Italy',
        iso2: 'it',
        provinces: [
          { text: 'Province', value: '' },
          { text: 'Agrigento', value: 'AG' },
          { text: 'Alessandria', value: 'AL' },
          { text: 'Ancona', value: 'AN' },
          { text: 'Aosta', value: 'AO' },
          { text: 'Arezzo', value: 'AR' },
          { text: 'Ascoli Piceno', value: 'AP' },
          { text: 'Asti', value: 'AT' },
          { text: 'Avellino', value: 'AV' },
          { text: 'Bari', value: 'BA' },
          { text: 'Barletta-Andria-Trani', value: 'BT' },
          { text: 'Belluno', value: 'BL' },
          { text: 'Benevento', value: 'BN' },
          { text: 'Bergamo', value: 'BG' },
          { text: 'Biella', value: 'BI' },
          { text: 'Bologna', value: 'BO' },
          { text: 'Bolzano', value: 'BZ' },
          { text: 'Brescia', value: 'BS' },
          { text: 'Brindisi', value: 'BR' },
          { text: 'Cagliari', value: 'CA' },
          { text: 'Caltanissetta', value: 'CL' },
          { text: 'Campobasso', value: 'CB' },
          { text: 'Carbonia-Iglesias', value: 'CI' },
          { text: 'Caserta', value: 'CE' },
          { text: 'Catania', value: 'CT' },
          { text: 'Catanzaro', value: 'CZ' },
          { text: 'Chieti', value: 'CH' },
          { text: 'Como', value: 'CO' },
          { text: 'Cosenza', value: 'CS' },
          { text: 'Cremona', value: 'CR' },
          { text: 'Crotone', value: 'KR' },
          { text: 'Cuneo', value: 'CN' },
          { text: 'Enna', value: 'EN' },
          { text: 'Fermo', value: 'FM' },
          { text: 'Ferrara', value: 'FE' },
          { text: 'Firenze', value: 'FI' },
          { text: 'Foggia', value: 'FG' },
          { text: 'Forlì-Cesena', value: 'FC' },
          { text: 'Frosinone', value: 'FR' },
          { text: 'Genova', value: 'GE' },
          { text: 'Gorizia', value: 'GO' },
          { text: 'Grosseto', value: 'GR' },
          { text: 'Imperia', value: 'IM' },
          { text: 'Isernia', value: 'IS' },
          { text: "L'Aquila", value: 'AQ' },
          { text: 'La Spezia', value: 'SP' },
          { text: 'Latina', value: 'LT' },
          { text: 'Lecce', value: 'LE' },
          { text: 'Lecco', value: 'LC' },
          { text: 'Livorno', value: 'LI' },
          { text: 'Lodi', value: 'LO' },
          { text: 'Lucca', value: 'LU' },
          { text: 'Macerata', value: 'MC' },
          { text: 'Mantova', value: 'MN' },
          { text: 'Massa-Carrara', value: 'MS' },
          { text: 'Matera', value: 'MT' },
          { text: 'Medio Campidano', value: 'VS' },
          { text: 'Messina', value: 'ME' },
          { text: 'Milano', value: 'MI' },
          { text: 'Modena', value: 'MO' },
          { text: 'Monza e Brianza', value: 'MB' },
          { text: 'Napoli', value: 'NA' },
          { text: 'Novara', value: 'NO' },
          { text: 'Nuoro', value: 'NU' },
          { text: 'Ogliastra', value: 'OG' },
          { text: 'Olbia-Tempio', value: 'OT' },
          { text: 'Oristano', value: 'OR' },
          { text: 'Padova', value: 'PD' },
          { text: 'Palermo', value: 'PA' },
          { text: 'Parma', value: 'PR' },
          { text: 'Pavia', value: 'PV' },
          { text: 'Perugia', value: 'PG' },
          { text: 'Pesaro e Urbino', value: 'PU' },
          { text: 'Pescara', value: 'PE' },
          { text: 'Piacenza', value: 'PC' },
          { text: 'Pisa', value: 'PI' },
          { text: 'Pistoia', value: 'PT' },
          { text: 'Pordenone', value: 'PN' },
          { text: 'Potenza', value: 'PZ' },
          { text: 'Prato', value: 'PO' },
          { text: 'Ragusa', value: 'RG' },
          { text: 'Ravenna', value: 'RA' },
          { text: 'Reggio Calabria', value: 'RC' },
          { text: 'Reggio Emilia', value: 'RE' },
          { text: 'Rieti', value: 'RI' },
          { text: 'Rimini', value: 'RN' },
          { text: 'Roma', value: 'RM' },
          { text: 'Rovigo', value: 'RO' },
          { text: 'Salerno', value: 'SA' },
          { text: 'Sassari', value: 'SS' },
          { text: 'Savona', value: 'SV' },
          { text: 'Siena', value: 'SI' },
          { text: 'Siracusa', value: 'SR' },
          { text: 'Sondrio', value: 'SO' },
          { text: 'Taranto', value: 'TA' },
          { text: 'Teramo', value: 'TE' },
          { text: 'Terni', value: 'TR' },
          { text: 'Torino', value: 'TO' },
          { text: 'Trapani', value: 'TP' },
          { text: 'Trento', value: 'TN' },
          { text: 'Treviso', value: 'TV' },
          { text: 'Trieste', value: 'TS' },
          { text: 'Udine', value: 'UD' },
          { text: 'Varese', value: 'VA' },
          { text: 'Venezia', value: 'VE' },
          { text: 'Verbano-Cusio-Ossola', value: 'VB' },
          { text: 'Vercelli', value: 'VC' },
          { text: 'Verona', value: 'VR' },
          { text: 'Vibo Valentia', value: 'VV' },
          { text: 'Vicenza', value: 'VI' },
          { text: 'Viterbo', value: 'VT' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Jamaica',
        iso2: 'jm',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Japan',
        iso2: 'jp',
        provinces: [
          { text: 'Prefecture', value: '' },
          { text: 'Hokkaidō', value: 'JP-01' },
          { text: 'Aomori', value: 'JP-02' },
          { text: 'Iwate', value: 'JP-03' },
          { text: 'Miyagi', value: 'JP-04' },
          { text: 'Akita', value: 'JP-05' },
          { text: 'Yamagata', value: 'JP-06' },
          { text: 'Fukushima', value: 'JP-07' },
          { text: 'Ibaraki', value: 'JP-08' },
          { text: 'Tochigi', value: 'JP-09' },
          { text: 'Gunma', value: 'JP-10' },
          { text: 'Saitama', value: 'JP-11' },
          { text: 'Chiba', value: 'JP-12' },
          { text: 'Tōkyō', value: 'JP-13' },
          { text: 'Kanagawa', value: 'JP-14' },
          { text: 'Niigata', value: 'JP-15' },
          { text: 'Toyama', value: 'JP-16' },
          { text: 'Ishikawa', value: 'JP-17' },
          { text: 'Fukui', value: 'JP-18' },
          { text: 'Yamanashi', value: 'JP-19' },
          { text: 'Nagano', value: 'JP-20' },
          { text: 'Gifu', value: 'JP-21' },
          { text: 'Shizuoka', value: 'JP-22' },
          { text: 'Aichi', value: 'JP-23' },
          { text: 'Mie', value: 'JP-24' },
          { text: 'Shiga', value: 'JP-25' },
          { text: 'Kyōto', value: 'JP-26' },
          { text: 'Ōsaka', value: 'JP-27' },
          { text: 'Hyōgo', value: 'JP-28' },
          { text: 'Nara', value: 'JP-29' },
          { text: 'Wakayama', value: 'JP-30' },
          { text: 'Tottori', value: 'JP-31' },
          { text: 'Shimane', value: 'JP-32' },
          { text: 'Okayama', value: 'JP-33' },
          { text: 'Hiroshima', value: 'JP-34' },
          { text: 'Yamaguchi', value: 'JP-35' },
          { text: 'Tokushima', value: 'JP-36' },
          { text: 'Kagawa', value: 'JP-37' },
          { text: 'Ehime', value: 'JP-38' },
          { text: 'Kōchi', value: 'JP-39' },
          { text: 'Fukuoka', value: 'JP-40' },
          { text: 'Saga', value: 'JP-41' },
          { text: 'Nagasaki', value: 'JP-42' },
          { text: 'Kumamoto', value: 'JP-43' },
          { text: 'Ōita', value: 'JP-44' },
          { text: 'Miyazaki', value: 'JP-45' },
          { text: 'Kagoshima', value: 'JP-46' },
          { text: 'Okinawa', value: 'JP-47' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Jersey',
        iso2: 'je',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Jordan',
        iso2: 'jo',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Kazakhstan',
        iso2: 'kz',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Kenya',
        iso2: 'ke',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Kiribati',
        iso2: 'ki',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Kosovo',
        iso2: 'xk',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Kuwait',
        iso2: 'kw',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Kyrgyzstan',
        iso2: 'kg',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: "Lao People's Democratic Republic",
        iso2: 'la',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Latvia',
        iso2: 'lv',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Lebanon',
        iso2: 'lb',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Lesotho',
        iso2: 'ls',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Liberia',
        iso2: 'lr',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Libyan Arab Jamahiriya',
        iso2: 'ly',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Liechtenstein',
        iso2: 'li',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Lithuania',
        iso2: 'lt',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Luxembourg',
        iso2: 'lu',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Macao',
        iso2: 'mo',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Macedonia,  Republic Of',
        iso2: 'mk',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Madagascar',
        iso2: 'mg',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Malawi',
        iso2: 'mw',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Malaysia',
        iso2: 'my',
        provinces: [
          { text: 'State/Territory', value: '' },
          { text: 'Johor', value: 'JHR' },
          { text: 'Kedah', value: 'KDH' },
          { text: 'Kelantan', value: 'KTN' },
          { text: 'Kuala Lumpur', value: 'KUL' },
          { text: 'Labuan', value: 'LBN' },
          { text: 'Melaka', value: 'MLK' },
          { text: 'Negeri Sembilan', value: 'NSN' },
          { text: 'Pahang', value: 'PHG' },
          { text: 'Perak', value: 'PRK' },
          { text: 'Perlis', value: 'PLS' },
          { text: 'Pulau Pinang', value: 'PNG' },
          { text: 'Putrajaya', value: 'PJY' },
          { text: 'Sabah', value: 'SBH' },
          { text: 'Sarawak', value: 'SWK' },
          { text: 'Selangor', value: 'SGR' },
          { text: 'Terengganu', value: 'TRG' },
        ],
        zip: true,
        zipLabel: 'Postcode',
        sizeClass: 'field--third',
      },
      {
        country: 'Maldives',
        iso2: 'mv',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Mali',
        iso2: 'ml',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Malta',
        iso2: 'mt',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Martinique',
        iso2: 'mq',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Mauritania',
        iso2: 'mr',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Mauritius',
        iso2: 'mu',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Mayotte',
        iso2: 'yt',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Mexico',
        iso2: 'mx',
        provinces: [
          { text: 'State', value: '' },
          { text: 'Aguascalientes', value: 'AGS' },
          { text: 'Baja California', value: 'BC' },
          { text: 'Baja California Sur', value: 'BCS' },
          { text: 'Campeche', value: 'CAMP' },
          { text: 'Chiapas', value: 'CHIS' },
          { text: 'Chihuahua', value: 'CHIH' },
          { text: 'Ciudad de México', value: 'DF' },
          { text: 'Coahuila', value: 'COAH' },
          { text: 'Colima', value: 'COL' },
          { text: 'Durango', value: 'DGO' },
          { text: 'Guanajuato', value: 'GTO' },
          { text: 'Guerrero', value: 'GRO' },
          { text: 'Hidalgo', value: 'HGO' },
          { text: 'Jalisco', value: 'JAL' },
          { text: 'México', value: 'MEX' },
          { text: 'Michoacán', value: 'MICH' },
          { text: 'Morelos', value: 'MOR' },
          { text: 'Nayarit', value: 'NAY' },
          { text: 'Nuevo León', value: 'NL' },
          { text: 'Oaxaca', value: 'OAX' },
          { text: 'Puebla', value: 'PUE' },
          { text: 'Querétaro', value: 'QRO' },
          { text: 'Quintana Roo', value: 'Q ROO' },
          { text: 'San Luis Potosí', value: 'SLP' },
          { text: 'Sinaloa', value: 'SIN' },
          { text: 'Sonora', value: 'SON' },
          { text: 'Tabasco', value: 'TAB' },
          { text: 'Tamaulipas', value: 'TAMPS' },
          { text: 'Tlaxcala', value: 'TLAX' },
          { text: 'Veracruz', value: 'VER' },
          { text: 'Yucatán', value: 'YUC' },
          { text: 'Zacatecas', value: 'ZAC' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Moldova,  Republic of',
        iso2: 'md',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Monaco',
        iso2: 'mc',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Mongolia',
        iso2: 'mn',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Montenegro',
        iso2: 'me',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Montserrat',
        iso2: 'ms',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Morocco',
        iso2: 'ma',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Mozambique',
        iso2: 'mz',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Myanmar',
        iso2: 'mm',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Namibia',
        iso2: 'na',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Nauru',
        iso2: 'nr',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Nepal',
        iso2: 'np',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Netherlands',
        iso2: 'nl',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Netherlands Antilles',
        iso2: 'an',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'New Caledonia',
        iso2: 'nc',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'New Zealand',
        iso2: 'nz',
        provinces: [
          { text: 'Region', value: '' },
          { text: 'Auckland', value: 'AUK' },
          { text: 'Bay of Plenty', value: 'BOP' },
          { text: 'Canterbury', value: 'CAN' },
          { text: 'Gisborne', value: 'GIS' },
          { text: "Hawke's Bay", value: 'HKB' },
          { text: 'Manawatu-Wanganui', value: 'MWT' },
          { text: 'Marlborough', value: 'MBH' },
          { text: 'Nelson', value: 'NSN' },
          { text: 'Northland', value: 'NTL' },
          { text: 'Otago', value: 'OTA' },
          { text: 'Southland', value: 'STL' },
          { text: 'Taranaki', value: 'TKI' },
          { text: 'Tasman', value: 'TAS' },
          { text: 'Waikato', value: 'WKO' },
          { text: 'Wellington', value: 'WGN' },
          { text: 'West Coast', value: 'WTC' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Nicaragua',
        iso2: 'ni',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Niger',
        iso2: 'ne',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Nigeria',
        iso2: 'ng',
        provinces: [
          { text: 'State', value: '' },
          { text: 'Abia', value: 'AB' },
          { text: 'Abuja Federal Capital Territory', value: 'FC' },
          { text: 'Adamawa', value: 'AD' },
          { text: 'Akwa Ibom', value: 'AK' },
          { text: 'Anambra', value: 'AN' },
          { text: 'Bauchi', value: 'BA' },
          { text: 'Bayelsa', value: 'BY' },
          { text: 'Benue', value: 'BE' },
          { text: 'Borno', value: 'BO' },
          { text: 'Cross River', value: 'CR' },
          { text: 'Delta', value: 'DE' },
          { text: 'Ebonyi', value: 'EB' },
          { text: 'Edo', value: 'ED' },
          { text: 'Ekiti', value: 'EK' },
          { text: 'Enugu', value: 'EN' },
          { text: 'Gombe', value: 'GO' },
          { text: 'Imo', value: 'IM' },
          { text: 'Jigawa', value: 'JI' },
          { text: 'Kaduna', value: 'KD' },
          { text: 'Kano', value: 'KN' },
          { text: 'Katsina', value: 'KT' },
          { text: 'Kebbi', value: 'KE' },
          { text: 'Kogi', value: 'KO' },
          { text: 'Kwara', value: 'KW' },
          { text: 'Lagos', value: 'LA' },
          { text: 'Nasarawa', value: 'NA' },
          { text: 'Niger', value: 'NI' },
          { text: 'Ogun', value: 'OG' },
          { text: 'Ondo', value: 'ON' },
          { text: 'Osun', value: 'OS' },
          { text: 'Oyo', value: 'OY' },
          { text: 'Plateau', value: 'PL' },
          { text: 'Rivers', value: 'RI' },
          { text: 'Sokoto', value: 'SO' },
          { text: 'Taraba', value: 'TA' },
          { text: 'Yobe', value: 'YO' },
          { text: 'Zamfara', value: 'ZA' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Niue',
        iso2: 'nu',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Norfolk Island',
        iso2: 'nf',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: "Korea,  Democratic People's Republic Of",
        iso2: 'kp',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Norway',
        iso2: 'no',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Oman',
        iso2: 'om',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Pakistan',
        iso2: 'pk',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Palestinian Territory,  Occupied',
        iso2: 'ps',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Panama',
        iso2: 'pa',
        provinces: [
          { text: 'Region', value: '' },
          { text: 'Bocas del Toro', value: 'PA-1' },
          { text: 'Chiriquí', value: 'PA-4' },
          { text: 'Coclé', value: 'PA-2' },
          { text: 'Colón', value: 'PA-3' },
          { text: 'Darién', value: 'PA-5' },
          { text: 'Emberá', value: 'PA-EM' },
          { text: 'Herrera', value: 'PA-6' },
          { text: 'Kuna Yala', value: 'PA-KY' },
          { text: 'Los Santos', value: 'PA-7' },
          { text: 'Ngöbe-Buglé', value: 'PA-NB' },
          { text: 'Panamá', value: 'PA-8' },
          { text: 'Panamá Oeste', value: 'PA-10' },
          { text: 'Veraguas', value: 'PA-9' },
        ],
        zip: false,
        zipLabel: null,
        sizeClass: 'field--half',
      },
      {
        country: 'Papua New Guinea',
        iso2: 'pg',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Paraguay',
        iso2: 'py',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Peru',
        iso2: 'pe',
        provinces: [
          { text: 'Region', value: '' },
          { text: 'Amazonas', value: 'PE-AMA' },
          { text: 'Áncash', value: 'PE-ANC' },
          { text: 'Apurímac', value: 'PE-APU' },
          { text: 'Arequipa', value: 'PE-ARE' },
          { text: 'Ayacucho', value: 'PE-AYA' },
          { text: 'Cajamarca', value: 'PE-CAJ' },
          { text: 'Callao', value: 'PE-CAL' },
          { text: 'Cuzco', value: 'PE-CUS' },
          { text: 'Huancavelica', value: 'PE-HUV' },
          { text: 'Huánuco', value: 'PE-HUC' },
          { text: 'Ica', value: 'PE-ICA' },
          { text: 'Junín', value: 'PE-JUN' },
          { text: 'La Libertad', value: 'PE-LAL' },
          { text: 'Lambayeque', value: 'PE-LAM' },
          { text: 'Lima (departamento)', value: 'PE-LIM' },
          { text: 'Lima (provincia)', value: 'PE-LMA' },
          { text: 'Loreto', value: 'PE-LOR' },
          { text: 'Madre de Dios', value: 'PE-MDD' },
          { text: 'Moquegua', value: 'PE-MOQ' },
          { text: 'Pasco', value: 'PE-PAS' },
          { text: 'Piura', value: 'PE-PIU' },
          { text: 'Puno', value: 'PE-PUN' },
          { text: 'San Martín', value: 'PE-SAM' },
          { text: 'Tacna', value: 'PE-TAC' },
          { text: 'Tumbes', value: 'PE-TUM' },
          { text: 'Ucayali', value: 'PE-UCA' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Philippines',
        iso2: 'ph',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Pitcairn',
        iso2: 'pn',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Poland',
        iso2: 'pl',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Portugal',
        iso2: 'pt',
        provinces: [
          { text: 'Region', value: '' },
          { text: 'Açores', value: 'PT-20' },
          { text: 'Aveiro', value: 'PT-01' },
          { text: 'Beja', value: 'PT-02' },
          { text: 'Braga', value: 'PT-03' },
          { text: 'Bragança', value: 'PT-04' },
          { text: 'Castelo Branco', value: 'PT-05' },
          { text: 'Coimbra', value: 'PT-06' },
          { text: 'Évora', value: 'PT-07' },
          { text: 'Faro', value: 'PT-08' },
          { text: 'Guarda', value: 'PT-09' },
          { text: 'Leiria', value: 'PT-10' },
          { text: 'Lisboa', value: 'PT-11' },
          { text: 'Madeira', value: 'PT-30' },
          { text: 'Portalegre', value: 'PT-12' },
          { text: 'Porto', value: 'PT-13' },
          { text: 'Santarém', value: 'PT-14' },
          { text: 'Setúbal', value: 'PT-15' },
          { text: 'Viana do Castelo', value: 'PT-16' },
          { text: 'Vila Real', value: 'PT-17' },
          { text: 'Viseu', value: 'PT-18' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Qatar',
        iso2: 'qa',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Reunion',
        iso2: 're',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Romania',
        iso2: 'ro',
        provinces: [
          { text: 'County', value: '' },
          { text: 'Alba', value: 'AB' },
          { text: 'Arad', value: 'AR' },
          { text: 'Argeș', value: 'AG' },
          { text: 'Bacău', value: 'BC' },
          { text: 'Bihor', value: 'BH' },
          { text: 'Bistrița-Năsăud', value: 'BN' },
          { text: 'Botoșani', value: 'BT' },
          { text: 'Brăila', value: 'BR' },
          { text: 'Brașov', value: 'BV' },
          { text: 'București', value: 'B' },
          { text: 'Buzău', value: 'BZ' },
          { text: 'Caraș-Severin', value: 'CS' },
          { text: 'Cluj', value: 'CJ' },
          { text: 'Constanța', value: 'CT' },
          { text: 'Covasna', value: 'CV' },
          { text: 'Călărași', value: 'CL' },
          { text: 'Dolj', value: 'DJ' },
          { text: 'Dâmbovița', value: 'DB' },
          { text: 'Galați', value: 'GL' },
          { text: 'Giurgiu', value: 'GR' },
          { text: 'Gorj', value: 'GJ' },
          { text: 'Harghita', value: 'HR' },
          { text: 'Hunedoara', value: 'HD' },
          { text: 'Ialomița', value: 'IL' },
          { text: 'Iași', value: 'IS' },
          { text: 'Ilfov', value: 'IF' },
          { text: 'Maramureș', value: 'MM' },
          { text: 'Mehedinți', value: 'MH' },
          { text: 'Mureș', value: 'MS' },
          { text: 'Neamț', value: 'NT' },
          { text: 'Olt', value: 'OT' },
          { text: 'Prahova', value: 'PH' },
          { text: 'Sălaj', value: 'SJ' },
          { text: 'Satu Mare', value: 'SM' },
          { text: 'Sibiu', value: 'SB' },
          { text: 'Suceava', value: 'SV' },
          { text: 'Teleorman', value: 'TR' },
          { text: 'Timiș', value: 'TM' },
          { text: 'Tulcea', value: 'TL' },
          { text: 'Vâlcea', value: 'VL' },
          { text: 'Vaslui', value: 'VS' },
          { text: 'Vrancea', value: 'VN' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Russia',
        iso2: 'ru',
        provinces: [
          { text: 'Region', value: '' },
          { text: 'Altai Krai', value: 'ALT' },
          { text: 'Altai Republic', value: 'AL' },
          { text: 'Amur Oblast', value: 'AMU' },
          { text: 'Arkhangelsk Oblast', value: 'ARK' },
          { text: 'Astrakhan Oblast', value: 'AST' },
          { text: 'Belgorod Oblast', value: 'BEL' },
          { text: 'Bryansk Oblast', value: 'BRY' },
          { text: 'Chechen Republic', value: 'CE' },
          { text: 'Chelyabinsk Oblast', value: 'CHE' },
          { text: 'Chukotka Autonomous Okrug', value: 'CHU' },
          { text: 'Chuvash Republic', value: 'CU' },
          { text: 'Irkutsk Oblast', value: 'IRK' },
          { text: 'Ivanovo Oblast', value: 'IVA' },
          { text: 'Jewish Autonomous Oblast', value: 'YEV' },
          { text: 'Kabardino-Balkarian Republic', value: 'KB' },
          { text: 'Kaliningrad Oblast', value: 'KGD' },
          { text: 'Kaluga Oblast', value: 'KLU' },
          { text: 'Kamchatka Krai', value: 'KAM' },
          { text: 'Karachay–Cherkess Republic', value: 'KC' },
          { text: 'Kemerovo Oblast', value: 'KEM' },
          { text: 'Khabarovsk Krai', value: 'KHA' },
          { text: 'Khanty-Mansi Autonomous Okrug', value: 'KHM' },
          { text: 'Kirov Oblast', value: 'KIR' },
          { text: 'Komi Republic', value: 'KO' },
          { text: 'Kostroma Oblast', value: 'KOS' },
          { text: 'Krasnodar Krai', value: 'KDA' },
          { text: 'Krasnoyarsk Krai', value: 'KYA' },
          { text: 'Kurgan Oblast', value: 'KGN' },
          { text: 'Kursk Oblast', value: 'KRS' },
          { text: 'Leningrad Oblast', value: 'LEN' },
          { text: 'Lipetsk Oblast', value: 'LIP' },
          { text: 'Magadan Oblast', value: 'MAG' },
          { text: 'Mari El Republic', value: 'ME' },
          { text: 'Moscow', value: 'MOW' },
          { text: 'Moscow Oblast', value: 'MOS' },
          { text: 'Murmansk Oblast', value: 'MUR' },
          { text: 'Nizhny Novgorod Oblast', value: 'NIZ' },
          { text: 'Novgorod Oblast', value: 'NGR' },
          { text: 'Novosibirsk Oblast', value: 'NVS' },
          { text: 'Omsk Oblast', value: 'OMS' },
          { text: 'Orenburg Oblast', value: 'ORE' },
          { text: 'Oryol Oblast', value: 'ORL' },
          { text: 'Penza Oblast', value: 'PNZ' },
          { text: 'Perm Krai', value: 'PER' },
          { text: 'Primorsky Krai', value: 'PRI' },
          { text: 'Pskov Oblast', value: 'PSK' },
          { text: 'Republic of Adygeya', value: 'AD' },
          { text: 'Republic of Bashkortostan', value: 'BA' },
          { text: 'Republic of Buryatia', value: 'BU' },
          { text: 'Republic of Dagestan', value: 'DA' },
          { text: 'Republic of Ingushetia', value: 'IN' },
          { text: 'Republic of Kalmykia', value: 'KL' },
          { text: 'Republic of Karelia', value: 'KR' },
          { text: 'Republic of Khakassia', value: 'KK' },
          { text: 'Republic of Mordovia', value: 'MO' },
          { text: 'Republic of North Ossetia–Alania', value: 'SE' },
          { text: 'Republic of Tatarstan', value: 'TA' },
          { text: 'Rostov Oblast', value: 'ROS' },
          { text: 'Ryazan Oblast', value: 'RYA' },
          { text: 'Saint Petersburg', value: 'SPE' },
          { text: 'Sakha Republic (Yakutia)', value: 'SA' },
          { text: 'Sakhalin Oblast', value: 'SAK' },
          { text: 'Samara Oblast', value: 'SAM' },
          { text: 'Saratov Oblast', value: 'SAR' },
          { text: 'Smolensk Oblast', value: 'SMO' },
          { text: 'Stavropol Krai', value: 'STA' },
          { text: 'Sverdlovsk Oblast', value: 'SVE' },
          { text: 'Tambov Oblast', value: 'TAM' },
          { text: 'Tomsk Oblast', value: 'TOM' },
          { text: 'Tula Oblast', value: 'TUL' },
          { text: 'Tver Oblast', value: 'TVE' },
          { text: 'Tyumen Oblast', value: 'TYU' },
          { text: 'Tyva Republic', value: 'TY' },
          { text: 'Udmurtia', value: 'UD' },
          { text: 'Ulyanovsk Oblast', value: 'ULY' },
          { text: 'Vladimir Oblast', value: 'VLA' },
          { text: 'Volgograd Oblast', value: 'VGG' },
          { text: 'Vologda Oblast', value: 'VLG' },
          { text: 'Voronezh Oblast', value: 'VOR' },
          { text: 'Yamalo-Nenets Autonomous Okrug', value: 'YAN' },
          { text: 'Yaroslavl Oblast', value: 'YAR' },
          { text: 'Zabaykalsky Krai', value: 'ZAB' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Rwanda',
        iso2: 'rw',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Samoa',
        iso2: 'ws',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'San Marino',
        iso2: 'sm',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Sao Tome And Principe',
        iso2: 'st',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Saudi Arabia',
        iso2: 'sa',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Senegal',
        iso2: 'sn',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Serbia',
        iso2: 'rs',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Seychelles',
        iso2: 'sc',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Sierra Leone',
        iso2: 'sl',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Singapore',
        iso2: 'sg',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Sint Maarten',
        iso2: 'sx',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Slovakia',
        iso2: 'sk',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Slovenia',
        iso2: 'si',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Solomon Islands',
        iso2: 'sb',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Somalia',
        iso2: 'so',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'South Africa',
        iso2: 'za',
        provinces: [
          { text: 'Province', value: '' },
          { text: 'Eastern Cape', value: 'EC' },
          { text: 'Free State', value: 'FS' },
          { text: 'Gauteng', value: 'GT' },
          { text: 'KwaZulu-Natal', value: 'NL' },
          { text: 'Limpopo', value: 'LP' },
          { text: 'Mpumalanga', value: 'MP' },
          { text: 'North West', value: 'NW' },
          { text: 'Northern Cape', value: 'NC' },
          { text: 'Western Cape', value: 'WC' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'South Georgia And The South Sandwich Islands',
        iso2: 'gs',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'South Korea',
        iso2: 'kr',
        provinces: [
          { text: 'Province', value: '' },
          { text: 'Busan', value: 'KR-26' },
          { text: 'Chungbuk', value: 'KR-43' },
          { text: 'Chungnam', value: 'KR-44' },
          { text: 'Daegu', value: 'KR-27' },
          { text: 'Daejeon', value: 'KR-30' },
          { text: 'Gangwon', value: 'KR-42' },
          { text: 'Gwangju', value: 'KR-29' },
          { text: 'Gyeongbuk', value: 'KR-47' },
          { text: 'Gyeonggi', value: 'KR-41' },
          { text: 'Gyeongnam', value: 'KR-48' },
          { text: 'Incheon', value: 'KR-28' },
          { text: 'Jeju', value: 'KR-49' },
          { text: 'Jeonbuk', value: 'KR-45' },
          { text: 'Jeonnam', value: 'KR-46' },
          { text: 'Sejong', value: 'KR-50' },
          { text: 'Seoul', value: 'KR-11' },
          { text: 'Ulsan', value: 'KR-31' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'South Sudan',
        iso2: 'ss',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Spain',
        iso2: 'es',
        provinces: [
          { text: 'Province', value: '' },
          { text: 'A Coruña', value: 'C' },
          { text: 'Álava', value: 'VI' },
          { text: 'Albacete', value: 'AB' },
          { text: 'Alicante', value: 'A' },
          { text: 'Almería', value: 'AL' },
          { text: 'Asturias', value: 'O' },
          { text: 'Ávila', value: 'AV' },
          { text: 'Badajoz', value: 'BA' },
          { text: 'Balears', value: 'PM' },
          { text: 'Barcelona', value: 'B' },
          { text: 'Burgos', value: 'BU' },
          { text: 'Cáceres', value: 'CC' },
          { text: 'Cádiz', value: 'CA' },
          { text: 'Cantabria', value: 'S' },
          { text: 'Castellón', value: 'CS' },
          { text: 'Ceuta', value: 'CE' },
          { text: 'Ciudad Real', value: 'CR' },
          { text: 'Córdoba', value: 'CO' },
          { text: 'Cuenca', value: 'CU' },
          { text: 'Girona', value: 'GI' },
          { text: 'Granada', value: 'GR' },
          { text: 'Guadalajara', value: 'GU' },
          { text: 'Guipúzcoa', value: 'SS' },
          { text: 'Huelva', value: 'H' },
          { text: 'Huesca', value: 'HU' },
          { text: 'Jaén', value: 'J' },
          { text: 'La Rioja', value: 'LO' },
          { text: 'Las Palmas', value: 'GC' },
          { text: 'León', value: 'LE' },
          { text: 'Lleida', value: 'L' },
          { text: 'Lugo', value: 'LU' },
          { text: 'Madrid', value: 'M' },
          { text: 'Málaga', value: 'MA' },
          { text: 'Melilla', value: 'ML' },
          { text: 'Murcia', value: 'MU' },
          { text: 'Navarra', value: 'NA' },
          { text: 'Ourense', value: 'OR' },
          { text: 'Palencia', value: 'P' },
          { text: 'Pontevedra', value: 'PO' },
          { text: 'Salamanca', value: 'SA' },
          { text: 'Santa Cruz de Tenerife', value: 'TF' },
          { text: 'Segovia', value: 'SG' },
          { text: 'Sevilla', value: 'SE' },
          { text: 'Soria', value: 'SO' },
          { text: 'Tarragona', value: 'T' },
          { text: 'Teruel', value: 'TE' },
          { text: 'Toledo', value: 'TO' },
          { text: 'Valencia', value: 'V' },
          { text: 'Valladolid', value: 'VA' },
          { text: 'Vizcaya', value: 'BI' },
          { text: 'Zamora', value: 'ZA' },
          { text: 'Zaragoza', value: 'Z' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Sri Lanka',
        iso2: 'lk',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Saint Barthélemy',
        iso2: 'bl',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Saint Helena',
        iso2: 'sh',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Saint Kitts And Nevis',
        iso2: 'kn',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Saint Lucia',
        iso2: 'lc',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Saint Martin',
        iso2: 'mf',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Saint Pierre And Miquelon',
        iso2: 'pm',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'St. Vincent',
        iso2: 'vc',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Sudan',
        iso2: 'sd',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Suriname',
        iso2: 'sr',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Svalbard And Jan Mayen',
        iso2: 'sj',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Swaziland',
        iso2: 'sz',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Sweden',
        iso2: 'se',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Switzerland',
        iso2: 'ch',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Syria',
        iso2: 'sy',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Taiwan',
        iso2: 'tw',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Tajikistan',
        iso2: 'tj',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Tanzania, United Republic Of',
        iso2: 'tz',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Thailand',
        iso2: 'th',
        provinces: [
          { text: 'Province', value: '' },
          { text: 'Amnat Charoen', value: 'TH-37' },
          { text: 'Ang Thong', value: 'TH-15' },
          { text: 'Bangkok', value: 'TH-10' },
          { text: 'Bueng Kan', value: 'TH-38' },
          { text: 'Buriram', value: 'TH-31' },
          { text: 'Chachoengsao', value: 'TH-24' },
          { text: 'Chai Nat', value: 'TH-18' },
          { text: 'Chaiyaphum', value: 'TH-36' },
          { text: 'Chanthaburi', value: 'TH-22' },
          { text: 'Chiang Mai', value: 'TH-50' },
          { text: 'Chiang Rai', value: 'TH-57' },
          { text: 'Chon Buri', value: 'TH-20' },
          { text: 'Chumphon', value: 'TH-86' },
          { text: 'Kalasin', value: 'TH-46' },
          { text: 'Kamphaeng Phet', value: 'TH-62' },
          { text: 'Kanchanaburi', value: 'TH-71' },
          { text: 'Khon Kaen', value: 'TH-40' },
          { text: 'Krabi', value: 'TH-81' },
          { text: 'Lampang', value: 'TH-52' },
          { text: 'Lamphun', value: 'TH-51' },
          { text: 'Loei', value: 'TH-42' },
          { text: 'Lopburi', value: 'TH-16' },
          { text: 'Mae Hong Son', value: 'TH-58' },
          { text: 'Maha Sarakham', value: 'TH-44' },
          { text: 'Mukdahan', value: 'TH-49' },
          { text: 'Nakhon Nayok', value: 'TH-26' },
          { text: 'Nakhon Pathom', value: 'TH-73' },
          { text: 'Nakhon Phanom', value: 'TH-48' },
          { text: 'Nakhon Ratchasima', value: 'TH-30' },
          { text: 'Nakhon Sawan', value: 'TH-60' },
          { text: 'Nakhon Si Thammarat', value: 'TH-80' },
          { text: 'Nan', value: 'TH-55' },
          { text: 'Narathiwat', value: 'TH-96' },
          { text: 'Nong Bua Lam Phu', value: 'TH-39' },
          { text: 'Nong Khai', value: 'TH-43' },
          { text: 'Nonthaburi', value: 'TH-12' },
          { text: 'Pathum Thani', value: 'TH-13' },
          { text: 'Pattani', value: 'TH-94' },
          { text: 'Pattaya', value: 'TH-S' },
          { text: 'Phangnga', value: 'TH-82' },
          { text: 'Phatthalung', value: 'TH-93' },
          { text: 'Phayao', value: 'TH-56' },
          { text: 'Phetchabun', value: 'TH-67' },
          { text: 'Phetchaburi', value: 'TH-76' },
          { text: 'Phichit', value: 'TH-66' },
          { text: 'Phitsanulok', value: 'TH-65' },
          { text: 'Phra Nakhon Si Ayutthaya', value: 'TH-14' },
          { text: 'Phrae', value: 'TH-54' },
          { text: 'Phuket', value: 'TH-83' },
          { text: 'Prachin Buri', value: 'TH-25' },
          { text: 'Prachuap Khiri Khan', value: 'TH-77' },
          { text: 'Ranong', value: 'TH-85' },
          { text: 'Ratchaburi', value: 'TH-70' },
          { text: 'Rayong', value: 'TH-21' },
          { text: 'Roi Et', value: 'TH-45' },
          { text: 'Sa Kaeo', value: 'TH-27' },
          { text: 'Sakon Nakhon', value: 'TH-47' },
          { text: 'Samut Prakan', value: 'TH-11' },
          { text: 'Samut Sakhon', value: 'TH-74' },
          { text: 'Samut Songkhram', value: 'TH-75' },
          { text: 'Saraburi', value: 'TH-19' },
          { text: 'Satun', value: 'TH-91' },
          { text: 'Sing Buri', value: 'TH-17' },
          { text: 'Sisaket', value: 'TH-33' },
          { text: 'Songkhla', value: 'TH-90' },
          { text: 'Sukhothai', value: 'TH-64' },
          { text: 'Suphan Buri', value: 'TH-72' },
          { text: 'Surat Thani', value: 'TH-84' },
          { text: 'Surin', value: 'TH-32' },
          { text: 'Tak', value: 'TH-63' },
          { text: 'Trang', value: 'TH-92' },
          { text: 'Trat', value: 'TH-23' },
          { text: 'Ubon Ratchathani', value: 'TH-34' },
          { text: 'Udon Thani', value: 'TH-41' },
          { text: 'Uthai Thani', value: 'TH-61' },
          { text: 'Uttaradit', value: 'TH-53' },
          { text: 'Yala', value: 'TH-95' },
          { text: 'Yasothon', value: 'TH-35' },
        ],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--third',
      },
      {
        country: 'Timor Leste',
        iso2: 'tl',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Togo',
        iso2: 'tg',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Tokelau',
        iso2: 'tk',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Tonga',
        iso2: 'to',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Trinidad and Tobago',
        iso2: 'tt',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Tunisia',
        iso2: 'tn',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Turkey',
        iso2: 'tr',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Turkmenistan',
        iso2: 'tm',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Turks and Caicos Islands',
        iso2: 'tc',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Tuvalu',
        iso2: 'tv',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'United States Minor Outlying Islands',
        iso2: 'vi',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Uganda',
        iso2: 'ug',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Ukraine',
        iso2: 'ua',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'United Arab Emirates',
        iso2: 'ae',
        provinces: [
          { text: 'Emirate', value: '' },
          { text: 'Abu Dhabi', value: 'AZ' },
          { text: 'Ajman', value: 'AJ' },
          { text: 'Dubai', value: 'DU' },
          { text: 'Fujairah', value: 'FU' },
          { text: 'Ras al-Khaimah', value: 'RK' },
          { text: 'Sharjah', value: 'SH' },
          { text: 'Umm al-Quwain', value: 'UQ' },
        ],
        zip: false,
        zipLabel: null,
        sizeClass: 'field--half',
      },
      {
        country: 'United Kingdom',
        iso2: 'gb',
        provinces: [],
        zip: true,
        zipLabel: 'Postcode',
        sizeClass: 'field--half',
      },
      {
        country: 'United States',
        iso2: 'us',
        provinces: [
          { text: 'State', value: '' },
          { text: 'Alabama', value: 'AL' },
          { text: 'Alaska', value: 'AK' },
          { text: 'American Samoa', value: 'AS' },
          { text: 'Arizona', value: 'AZ' },
          { text: 'Arkansas', value: 'AR' },
          { text: 'California', value: 'CA' },
          { text: 'Colorado', value: 'CO' },
          { text: 'Connecticut', value: 'CT' },
          { text: 'Delaware', value: 'DE' },
          { text: 'District of Columbia', value: 'DC' },
          { text: 'Federated States of Micronesia', value: 'FM' },
          { text: 'Florida', value: 'FL' },
          { text: 'Georgia', value: 'GA' },
          { text: 'Guam', value: 'GU' },
          { text: 'Hawaii', value: 'HI' },
          { text: 'Idaho', value: 'ID' },
          { text: 'Illinois', value: 'IL' },
          { text: 'Indiana', value: 'IN' },
          { text: 'Iowa', value: 'IA' },
          { text: 'Kansas', value: 'KS' },
          { text: 'Kentucky', value: 'KY' },
          { text: 'Louisiana', value: 'LA' },
          { text: 'Maine', value: 'ME' },
          { text: 'Marshall Islands', value: 'MH' },
          { text: 'Maryland', value: 'MD' },
          { text: 'Massachusetts', value: 'MA' },
          { text: 'Michigan', value: 'MI' },
          { text: 'Minnesota', value: 'MN' },
          { text: 'Mississippi', value: 'MS' },
          { text: 'Missouri', value: 'MO' },
          { text: 'Montana', value: 'MT' },
          { text: 'Nebraska', value: 'NE' },
          { text: 'Nevada', value: 'NV' },
          { text: 'New Hampshire', value: 'NH' },
          { text: 'New Jersey', value: 'NJ' },
          { text: 'New Mexico', value: 'NM' },
          { text: 'New York', value: 'NY' },
          { text: 'North Carolina', value: 'NC' },
          { text: 'North Dakota', value: 'ND' },
          { text: 'Northern Mariana Islands', value: 'MP' },
          { text: 'Ohio', value: 'OH' },
          { text: 'Oklahoma', value: 'OK' },
          { text: 'Oregon', value: 'OR' },
          { text: 'Palau', value: 'PW' },
          { text: 'Pennsylvania', value: 'PA' },
          { text: 'Puerto Rico', value: 'PR' },
          { text: 'Rhode Island', value: 'RI' },
          { text: 'South Carolina', value: 'SC' },
          { text: 'South Dakota', value: 'SD' },
          { text: 'Tennessee', value: 'TN' },
          { text: 'Texas', value: 'TX' },
          { text: 'Utah', value: 'UT' },
          { text: 'Vermont', value: 'VT' },
          { text: 'Virgin Islands', value: 'VI' },
          { text: 'Virginia', value: 'VA' },
          { text: 'Washington', value: 'WA' },
          { text: 'West Virginia', value: 'WV' },
          { text: 'Wisconsin', value: 'WI' },
          { text: 'Wyoming', value: 'WY' },
          { text: 'Armed Forces Americas', value: 'AA' },
          { text: 'Armed Forces Europe', value: 'AE' },
          { text: 'Armed Forces Pacific', value: 'AP' },
        ],
        zip: true,
        zipLabel: 'ZIP code',
        sizeClass: 'field--third',
      },
      {
        country: 'Uruguay',
        iso2: 'uy',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Uzbekistan',
        iso2: 'uz',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Vanuatu',
        iso2: 'vu',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Holy See (Vatican City State)',
        iso2: 'va',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Venezuela',
        iso2: 've',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Vietnam',
        iso2: 'vn',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Wallis And Futuna',
        iso2: 'wf',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Western Sahara',
        iso2: 'eh',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Yemen',
        iso2: 'ye',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
      {
        country: 'Zambia',
        iso2: 'zm',
        provinces: [],
        zip: true,
        zipLabel: 'Postal code',
        sizeClass: 'field--half',
      },
      {
        country: 'Zimbabwe',
        iso2: 'zw',
        provinces: [],
        zip: false,
        zipLabel: null,
        sizeClass: '',
      },
    ],
  },

  captureInfo: function () {
    if (window.Shopify) {
      shp.l.shop = window.Shopify.shop
      shp.l.country = window.Shopify.country
      shp.l.theme = window.Shopify.theme.name
      shp.l.locate = window.Shopify.locale
      shp.l.currency = window.Shopify.currency.active
    }
  },
  generateBuyButton: function (e) {
    return '<button class="shp_btn-buy" type="button" data-modal-toggle="authentication-modal" id="open-modal">Open Popup SHOPWIN</button>'
  },
  configTelInput: () => {
    const phoneInput = document.getElementById('phone')
    shp.l.iti = intlTelInput(phoneInput, {
      initialCountry: 'auto',
      geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () { }, 'jsonp').always(function (
          resp
        ) {
          var countryCode = resp && resp.country ? resp.country : 'us'
          callback(countryCode)
        })
      },
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.18/js/utils.js',
    })
    const itiDiv = document.getElementsByClassName('iti--allow-dropdown')
    itiDiv[0].classList.add('w_full_phone')

    // const itiFlag = document.getElementsByClassName('iti__flag')
    // itiFlag[0].classList.add('block')
    // add fullwidth class
  },
  toggleCart: () => {
    const cartContent = document.getElementById('cart-content')
    const cartTitleName = document.getElementById('cart-title-name')
    const cartTitle = document.getElementById('cart-title')

    if (cartContent.style.display === 'none') {
      cartContent.style = ''
      cartTitleName.textContent = 'Hide Cart Details'
      cartTitle.classList.add('f_cart_title')
      cartTitle.classList.add('f_cart_bg')
    } else {
      cartContent.style = 'display:none'
      cartTitleName.textContent = 'Show Cart Details'
      cartTitle.classList.remove('f_cart_title')
      cartTitle.classList.remove('f_cart_bg')
    }
  },
  validatePhone(input) {
    var errorMap = [
      'Invalid number',
      'Invalid country code',
      'Too short',
      'Too long',
      'Invalid number',
    ]
    var errMsg = ''

    var errorCode = shp.l.iti.getValidationError()
    var msgPrefix = ''

    switch (errorCode) {
      case 0:
      case 4:
        break
      case 1:
        msgPrefix = 'Phone number has an '
        break
      case 2:
      case 3:
        msgPrefix = 'Phone number is '
        break
    }

    if (input.value.trim()) {
      if (!iti.isValidNumber()) {
        errMsg =
          msgPrefix + errorMap[errorCode] ? errorMap[errorCode] : 'Invalid number'
      }
    }

    return errMsg
  },
  validForm: () => {
    let valid = true
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    shp.l.settings.form.elements.forEach((elem) => {
      if (elem.state === 'REQUIRED') {
        if (elem.id === 'address') {
          const countrySel = document.getElementById('country')
          const provinceSel = document.getElementById('province')
          const zipSel = document.getElementById('zip')

          const countryIdx = shp.l.countryConfig.findIndex(
            (country) => country.iso2 === countrySel.value
          )
          if (countryIdx) {
            if (
              shp.l.countryConfig[countryIdx].provinces.length > 0 &&
              !provinceSel.value
            ) {
              valid = false
              provinceSel.classList.add('border_error')
              const provinceErrLabel = document.getElementById('province-error')
              provinceErrLabel.hidden = false
            }

            if (shp.l.countryConfig[countryIdx].zip && !zipSel.value) {
              valid = false
              zipSel.classList.add('border_error')
              const zipErrLabel = document.getElementById('zip-error')
              zipErrLabel.hidden = false
            }
          } else {
            valid = false
            country.classList.add('border_error')
            const countryErrLabel = document.getElementById('country-error')
            countryErrLabel.hidden = false
          }
        } else {
          const input = document.getElementById(elem.id)
          const inputValue = input.value
          if (
            !inputValue ||
            (input.id === 'email' && !emailRegex.test(inputValue)) ||
            (input.id === 'phone' && !iti.isValidNumber())
          ) {
            valid = false
            input.classList.add('border_error')
            const inputErrLabel = document.getElementById(elem.id + '-error')
            inputErrLabel.hidden = false
          }
        }
      }
    })
    return valid
  },
  submitForm: (evt) => {
    evt.preventDefault()
    console.log(shp.validForm())
    if (shp.validForm()) {
      //llamar API
    }
  },
  renderForm: async () => {
    try {
      const form = document.getElementById('checkout-form')
      shp.l.settings.form.elements.forEach((elem) => {
        switch (elem.type) {
          case 'TITLE':
            const h3 = document.createElement('h3')
            h3.id = elem.id
            h3.className = elem.classes
            h3.textContent = elem.title
            form.appendChild(h3)
            break
          case 'TEXT':
            const txtInput = document.createElement('input')
            txtInput.id = elem.id
            txtInput.name = elem.label
            txtInput.type = 'text'
            txtInput.className = elem.classes
            txtInput.placeholder = elem.placeholder
            const txtErrLbl = document.createElement('label')
            txtErrLbl.id = elem.id + '-error'
            txtErrLbl.htmlFor = elem.id
            txtErrLbl.textContent = elem.errorFeed
            txtErrLbl.className = 'label_error'
            txtErrLbl.hidden = true
            txtInput.onchange = () => {
              txtErrLbl.hidden = true
              txtInput.classList.remove('border_error')
            }
            form.appendChild(txtInput)
            form.appendChild(txtErrLbl)
            break
          case 'CHECKBOX':
            const chckInput = document.createElement('input')
            const div = document.createElement('div')
            div.className = 'f_checkbox'
            const inputDiv = document.createElement('div')
            inputDiv.className = 'f_checkbox_div'
            chckInput.id = elem.id
            chckInput.type = 'checkbox'
            chckInput.className = elem.inputClasses
            chckInput.name = elem.label
            const checkLabel = document.createElement('label')
            checkLabel.htmlFor = elem.id
            checkLabel.className = elem.labelClasses
            checkLabel.textContent = elem.label
            const checkErrLbl = document.createElement('label')
            checkErrLbl.id = elem.id + '-error'
            checkErrLbl.htmlFor = elem.id
            checkErrLbl.textContent = elem.errorFeed
            checkErrLbl.className = 'label_error'
            checkErrLbl.hidden = true
            chckInput.onchange = () => {
              checkErrLbl.hidden = true
              chckInput.classList.remove('border_error ')
            }
            inputDiv.appendChild(chckInput)
            div.appendChild(inputDiv)
            div.appendChild(checkLabel)
            form.appendChild(div)
            form.appendChild(checkErrLbl)
            break
          case 'EMAIL':
            const mailInput = document.createElement('input')
            mailInput.id = elem.id
            mailInput.name = elem.label
            mailInput.className = elem.classes
            mailInput.placeholder = elem.placeholder
            mailInput.type = 'email'
            const mailErrLbl = document.createElement('label')
            mailErrLbl.id = elem.id + '-error'
            mailErrLbl.htmlFor = elem.id
            mailErrLbl.textContent = elem.errorFeed
            mailErrLbl.className = 'label_error'
            mailErrLbl.hidden = true
            mailInput.onchange = () => {
              mailErrLbl.hidden = true
              mailInput.classList.remove('border_error')
            }
            form.appendChild(mailInput)
            form.appendChild(mailErrLbl)
            break
          case 'PHONE':
            const phoneInput = document.createElement('input')
            phoneInput.id = elem.id
            phoneInput.type = 'tel'
            phoneInput.className = elem.classes
            const phoneErrLbl = document.createElement('label')
            phoneErrLbl.id = elem.id + '-error'
            phoneErrLbl.htmlFor = 'phone'
            phoneErrLbl.textContent = elem.errorFeed
            phoneErrLbl.className = 'label_error'
            phoneErrLbl.hidden = true
            phoneInput.onchange = () => {
              phoneErrLbl.hidden = true
              phoneInput.classList.remove('border_error ')
            }
            form.appendChild(phoneInput)
            form.appendChild(phoneErrLbl)
            shp.configTelInput()
            break
          case 'ADDRESS':
            const countrySelect = document.createElement('select')
            countrySelect.id = 'country'
            countrySelect.className = elem.classes
            countrySelect.name = 'country'

            const countryErrLbl = document.createElement('label')
            countryErrLbl.htmlFor = 'country'
            countryErrLbl.id = 'country-error'
            countryErrLbl.textContent = elem.countryErrorFeed
            countryErrLbl.className = 'label_error'
            countryErrLbl.hidden = true

            countrySelect.onchange = () => {
              countryErrLbl.hidden = true
              countrySelect.classList.remove('border_error')
            }

            const stateSelect = document.createElement('select')
            stateSelect.id = 'province'
            stateSelect.className = elem.classes
            stateSelect.name = 'province'
            stateSelect.style = 'display:none;'

            const stateErrLbl = document.createElement('label')
            stateErrLbl.id = 'province-error'
            stateErrLbl.htmlFor = 'province'
            stateErrLbl.textContent = elem.provinceErrorFeed
            stateErrLbl.className = 'label_error'
            stateErrLbl.hidden = true

            stateSelect.onchange = () => {
              stateErrLbl.hidden = true
              stateSelect.classList.remove('border_error')
            }

            const postalInput = document.createElement('input')
            postalInput.id = 'zip'
            postalInput.type = 'text'
            postalInput.className = elem.classes
            postalInput.style = 'display:none;'

            const postalErrLbl = document.createElement('label')
            postalErrLbl.id = 'zip-error'
            postalErrLbl.htmlFor = 'zip'
            postalErrLbl.textContent = elem.postalErrorFeed
            postalErrLbl.className = 'label_error'
            postalErrLbl.hidden = true

            postalInput.onchange = () => {
              postalErrLbl.hidden = true
              postalInput.classList.remove('border_error')
            }

            shp.l.countryConfig.forEach((country) => {
              const option = document.createElement('option')
              option.value = country.iso2
              option.label = country.country
              countrySelect.appendChild(option)
            })

            countrySelect.addEventListener('change', (_evt) => {
              stateSelect.options.length = 0
              stateSelect.style = 'display:none;'
              postalInput.style = 'display:none;'
              const countryIdx = shp.l.countryConfig.findIndex(
                (country) => country.iso2 === countrySelect.value
              )
              if (countryIdx) {
                shp.l.countryConfig[countryIdx].provinces.forEach((prov) => {
                  const option = document.createElement('option')
                  option.value = prov.value
                  option.label = prov.text
                  stateSelect.appendChild(option)
                  stateSelect.style = ''
                })
                if (shp.l.countryConfig[countryIdx].zip) {
                  postalInput.placeholder = shp.l.countryConfig[countryIdx].zipLabel
                  postalInput.name = shp.l.countryConfig[countryIdx].zipLabel
                  postalInput.style = ''
                }
              }
            })

            form.appendChild(countrySelect)
            form.appendChild(countryErrLbl)
            form.appendChild(stateSelect)
            form.appendChild(stateErrLbl)
            form.appendChild(postalInput)
            form.appendChild(postalErrLbl)
            break
          case 'SUBMIT':
            const button = document.createElement('button')
            button.type = 'submit'
            button.className = elem.classes
            button.textContent = elem.label
            button.onclick = shp.submitForm
            form.appendChild(button)
            break
          case 'LINE':
            const hr = document.createElement('hr')
            form.appendChild(hr)
            break
        }
      })
    } catch (err) {
      console.log(err)
    }
  },
  renderCart: () => {
    //llamar api o algo
    const response = {
      items: [
        {
          id: 36110175633573,
          title: 'Red Rain Coat - Small',
          key: '794864229:03af7a8cb59a4c3c45595c76fa8cb53c',
          price: 12900,
          line_price: 12900,
          quantity: 2,
          sku: null,
          grams: 0,
          vendor: 'Shopify',
          properties: null,
          variant_id: 794864229,
          gift_card: false,
          url: '/products/red-rain-coat?variant=794864229',
          featured_image: {
            url: 'http://cdn.shopify.com/s/files/1/0040/7092/products/red-rain-coat.jpeg?v=1402604893',
            aspect_ratio: 1,
            alt: 'Red rain coat with a hood',
          },
          image:
            'http://cdn.shopify.com/s/files/1/0040/7092/products/red-rain-coat.jpeg?v=1402604893',
          handle: 'red-rain-coat',
          requires_shipping: true,
          product_title: 'Red Rain Coat',
          product_description: 'A bright red rain coat for rainy days!',
          product_type: 'Coat',
          variant_title: 'Red',
          variant_options: ['Red'],
          options_with_values: [
            {
              name: 'Color',
              value: 'Red',
            },
          ],
        },
      ],
    }

    let productSum = 0 // reference variables, should be replaced with the shopify calls or something else
    const discount = 0
    const shipping = 2

    response.items.forEach((product) => {
      productSum += product.price / 1000

      const productsListDiv = document.getElementById('products-container')

      const productDiv = document.createElement('div')
      productDiv.className = 'columns_cart'

      const productDetailsDiv = document.createElement('div')
      productDetailsDiv.className = 'f_product_div'

      const imageDiv = document.createElement('div')
      imageDiv.className = 'f_product_img'

      const quantityBadgeDiv = document.createElement('div')
      quantityBadgeDiv.className =
        'f_product_qt'
      quantityBadgeDiv.id = 'product-quantity'
      quantityBadgeDiv.textContent = product.quantity

      const productImg = document.createElement('img')
      productImg.id = 'product-img'
      productImg.className =
        'f_product_img-shadow'
      productImg.src = product.featured_image.url
      productImg.alt = product.featured_image.alt

      const productNameDiv = document.createElement('div')
      productNameDiv.className = 'f_product_name-div'

      const productNameP = document.createElement('p')
      productNameP.id = 'product-title'
      productNameP.className = 'f_product_title-p'
      productNameP.textContent = product.product_title
      const productVariantP = document.createElement('p')
      productVariantP.id = 'product-variant'
      productVariantP.className = 'f_product_variant-p'
      productVariantP.textContent = product.variant_title

      const productPriceP = document.createElement('p')
      productPriceP.id = 'product-price'
      productPriceP.className = 'f_product_price-p'
      productPriceP.textContent = `€${product.price / 1000}`

      imageDiv.appendChild(productImg)
      imageDiv.appendChild(quantityBadgeDiv)
      productNameDiv.appendChild(productNameP)
      productNameDiv.appendChild(productVariantP)
      productDetailsDiv.appendChild(imageDiv)
      productDetailsDiv.appendChild(productNameDiv)
      productDiv.appendChild(productDetailsDiv)
      productDiv.appendChild(productPriceP)
      productsListDiv.appendChild(productDiv)
    })

    const cartTotal = productSum + shipping - discount

    const cartSubTotalP = document.getElementById('cart-subtotal')
    cartSubTotalP.textContent = `€${productSum}`
    const cartDiscountP = document.getElementById('cart-discount')
    cartDiscountP.textContent = `€${discount}`
    const cartShippingP = document.getElementById('cart-shipping')
    cartShippingP.textContent = `€${shipping}`
    const cartTitleTotalP = document.getElementById('cart-title-total')
    cartTitleTotalP.textContent = `€${cartTotal}`
    const cartTotalP = document.getElementById('cart-total')
    cartTotalP.textContent = `€${cartTotal}`
  },
  init: function () {
    console.log("%cPOPUP SHOPWIN IN PROGRESS", "color: #901ae9; font-family: sans-serif; font-size: 20px; font-weight: 700")
    // Detectar el idioma y el template
    shp.captureInfo()

    /**
     * TODO: ocultar los botones de comprar del template
     */
    // Ocultar los botones de comprar ahora y más opciones de pago
    document.querySelector("head").insertAdjacentHTML("beforeend", "<style>.shopify-payment-button .shopify-payment-button__button--unbranded,.shopify-payment-button{display:none !important}</style>")

    document.querySelector("head").insertAdjacentHTML("beforeend", '<style>form[method="post"][action$="/cart/add"] [name="add"],form[method="post"][action$="/cart/add"] [type="submit"],#new-form-atc,[name="add"]{display:none !important}</style>')

    /**
     * TODO: CSS del Boton
     */
    document.querySelector('head').insertAdjacentHTML('beforeend', '<style>' + shp.l.cssButton + '</style>')

    /**
   * TODO: crear el botón de comprar
   */
    document.querySelector(".shopify-payment-button") ?
      document.querySelectorAll(".shopify-payment-button").forEach(function (e) {
        e.insertAdjacentHTML("beforebegin", shp.generateBuyButton("nameBotton"))
      })
      :
      console.log('No se encontró el botón de comprar')


    //CSS del Popup
    document.querySelector('head').insertAdjacentHTML('beforeend', '<style>' + shp.l.cssPopup + '</style>')

    //CSS del Formulario
    document.querySelector('head').insertAdjacentHTML('beforeend', '<style>' + shp.l.cssForm + '</style>')
    /**
    * TODO: insertar la CDN de Tailwind o el css y el jquery
    */
    let jqjs = document.createElement("script");
    jqjs.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js", jqjs.type = "text/javascript", document.querySelector("head").insertAdjacentElement("beforeend", jqjs)

    let ci = document.createElement("script");
    ci.src = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.18/js/intlTelInput.min.js",
      ci.integrity = "sha512-hpJ6J4jGqnovQ5g1J39VtNq1/UPsaFjjR6tuCVVkKtFIx8Uy4GeixgIxHPSG72lRUYx1xg/Em+dsqxvKNwyrSg==", ci.crossorigin = "anonymous", ci.referrerpolicy = "no-referrer", document.querySelector("head").insertAdjacentElement("beforeend", ci)

    document.querySelector('head').insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.18/css/intlTelInput.css"
    integrity = "sha512-gxWow8Mo6q6pLa1XH/CcH8JyiSDEtiwJV78E+D+QP0EVasFs8wKXq16G8CLD4CJ2SnonHr4Lm/yY2fSI2+cbmw=="
    crossorigin = "anonymous" referrerpolicy = "no-referrer" /> `)

    let im = document.createElement("script");
    im.src = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.18/js/intlTelInput-jquery.js",
      im.integrity = "sha512-OQ4jHPKEPwkASoFbbeWOpNBRSvbwxD5/zSVFWKrRs7BtMve5XbKRWcf2E1Lpfbp9QBnIyVC9DQGwuHczqSokaQ==", im.crossorigin = "anonymous", im.referrerpolicy = "no-referrer", document.querySelector("head").insertAdjacentElement("beforeend", im)

    let jqm = document.createElement("script");
    jqm.src = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.18/js/intlTelInput-jquery.min.js",
      jqm.integrity = "sha512-Bc9LELGc9+AYg+/BYBR9O8OEc3JrwZi8OHFwdTqYeYymMUpexQLkp01q/xTMyS3aE8TLdMSV1W3at2pBo4BlSA==", jqm.crossorigin = "anonymous", jqm.referrerpolicy = "no-referrer", document.querySelector("head").insertAdjacentElement("beforeend", jqm)

    let ijs = document.createElement("script");
    ijs.src = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.18/js/intlTelInput.js",
      ijs.crossorigin = "anonymous", ijs.referrerpolicy = "no-referrer", document.querySelector("head").insertAdjacentElement("beforeend", ijs)

    let ut = document.createElement("script");
    ut.src = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.18/js/utils.js",
      ut.integrity = "sha512-6sKpcusiQQ/vOBWU0ouNesdklDzgwywnf+255TCMAs+n68jnDqaDC3gt01ofYWry4mRdCHR+8uox88HT3YBOdQ==", ut.crossorigin = "anonymous", ut.referrerpolicy = "no-referrer", document.querySelector("head").insertAdjacentElement("beforeend", ut)

    let um = document.createElement("script");
    um.src = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.18/js/utils.min.js",
      ut.integrity = "sha512-Uyf+0OJZ2DBNO2156wplv4+1FZuZVsguTkfrO//Kg+BjaaauYSQWGJZBXmQiFkIrKsYQeUdnFi3zYZxGTsc2Mg==", um.crossorigin = "anonymous", um.referrerpolicy = "no-referrer", document.querySelector("head").insertAdjacentElement("beforeend", um)

    /**
     * TODO: insertar el html del popup
     */
    // crear el div contenedor
    document.querySelector("body").insertAdjacentHTML("beforeend", `<div id="modal-shp" class="container_modal_shp hidden">
    <!-- caracteristicas para centrar al centro de la pantalla -->
    <div class="container_modal_flex">
      <!-- oscurecer la pantalla -->
      <div class="container_modal_bg"></div>
      <!-- SE utiliza para efectos -->
      <div class="container_modal_space">
        &nbsp;
      </div>
      <!-- contenedor del contenido -->
      <div id="modal-container" class="container_content_modal">
        <!-- Content -->
        <div class="container_content">
          <button id="close-modal" type="button" class="close_modal" data-modal-toggle="authentication-modal">
            <svg aria-hidden="true" class="close_modal-svg" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="close_modal-span">Close modal</span>
          </button>
          <div class="modal_content_wrapper">
            <div class="modal_content_wrapper-shadow">
              <div id="cart-title" class="cart_title " onClick="shp.toggleCart()">
                <div class="columns_cart">
                  <div class="col_cart">
                    <p id="cart-title-name" class="cart_title_name">
                      Show Cart
                    </p>
                  </div>
                  <div class="col_cart">
                    <p id="cart-title-total" class="cart_title_total"></p>
                  </div>
                </div>
              </div>
              <div id="cart-content" class="cart_content" style="display: none">
                <div id="products-container" class="products_container"></div>
                <hr />
                <div class="columns_cart">
                  <div class="cart_calculate">
                    <p class="cart_calculate_p ">Subtotal</p>
                    <p class="cart_calculate_p">Discount</p>
                    <p class="cart_calculate_p">Shipping</p>
                  </div>
                  <div class="cart_calculate-mr">
                    <p id="cart-subtotal" class="cart_calculate-mr--p"></p>
                    <p id="cart-discount" class="cart_calculate-mr--p"></p>
                    <p id="cart-shipping" class="cart_calculate-mr--p"></p>
                  </div>
                </div>
                <hr />
                <div class="columns_cart">
                  <div class="cart_calculate">
                    <p class="cart_calculate--p">Total</p>
                  </div>
                  <div class="cart_calculate-mr">
                    <p id="cart-total" class="cart_calculate-mr--p"></p>
                  </div>
                </div>
              </div>
            </div>
            <form id="checkout-form" class="checkout_form" action="#"></form>
          </div>
        </div>
      </div>
    </div>
  </div>`)



    /**
     * TODO: cambiar las rutas de los botones de comprar
     */

    /**
     * TODO: crear el popup
     */

    const openButton = document.querySelector('#open-modal')
    const closeButton = document.querySelector('#close-modal')
    const modalContainer = document.querySelector('#modal-shp')
    const modal = document.querySelector('#modal-container')

    openButton.addEventListener("click", () => { openModal() })
    closeButton.addEventListener("click", () => { closeModal() })

    function openModal() {
      showAndHideModal(modalContainer, ['block'], ['hidden'])
      document.getElementById('checkout-form').innerHTML = ''
      //shp.drawCart()
      shp.renderForm()
      shp.renderCart()
    }

    function closeModal() {
      showAndHideModal(modalContainer, ['hidden'], ['block'])
    }

    function showAndHideModal(element, classToAdd, classToRemove) {
      element.classList.remove(...classToRemove)
      element.classList.add(...classToAdd)
    }

    document.addEventListener('keyup', (e) => {
      // if we press the ESC
      if (e.key == 'Escape' && document.querySelector('#modal-container')) {
        closeModal()
      }
    })

  },
}),
  'interactive' === document.readyState || 'complete' === document.readyState ? shp.init() : document.addEventListener('DOMContentLoaded', shp.init)
