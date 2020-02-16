<template>
	<div>
		<page-title :heading=heading :subheading=subheading :icon=icon></page-title>

		<div>
		  <b-card title="Admin" sub-title="Semua Admin yang terdaftar">
		    <b-table :striped="striped"
                 :bordered="bordered"
                 :outlined="outlined"
                 :small="small"
                 :hover="hover"
                 :dark="dark"
                 :fixed="fixed"
                 :foot-clone="footClone"
                 :items="items"
                 :fields="fields">

            <template v-slot:cell(action)="data">
              <b-button variant="primary" class="mb-1">Detail</b-button>
            </template>

        </b-table>
		  </b-card>
		</div>
	</div>
</template>

<script>
	import PageTitle from "./../architect/PageTitle.vue";
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'

  import {library} from '@fortawesome/fontawesome-svg-core'
  import {
    faTrashAlt,
    faCheck,
    faCalendarAlt,
    faAngleDown,
    faAngleUp,
    faTh,
  } from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  library.add(
    faTrashAlt,
    faCheck,
    faAngleDown,
    faAngleUp,
    faTh,
    faCalendarAlt,
  );

  export default {
    components: {
      PageTitle,
      VuePerfectScrollbar,
      'font-awesome-icon': FontAwesomeIcon,

    },
    data: () => ({
      heading: 'Admin',
      subheading: 'Selamat Datang di Halaman daftar Admin Redagroku',
      icon: 'pe-7s-users icon-gradient bg-tempting-azure',

      fields: [ 'no', 'nama', 'status', 'jenis_kelamin', 'tlp', 'action' ],
      items: [
        { no: 1, nama: 'Hosea Dike Prasetyanto', status: 'Administrator', jenis_kelamin:'Pria', tlp:'081907xxxxxx' },
        { no: 2, nama: 'Riki Sabara', status: 'Administrator', jenis_kelamin:'Pria', tlp:'081907xxxxxx' },
        { no: 3, nama: 'Elsandi Sutrisno', status: 'Administrator', jenis_kelamin:'Pria', tlp:'081907xxxxxx' }
      ],
      striped: true,
      bordered: true,
      outlined: true,
      small: false,
      hover: true,
      dark: false,
      fixed: false,
      footClone: false
    }),

    methods: {},

  };
</script>