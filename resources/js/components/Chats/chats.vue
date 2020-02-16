<template>
	<div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <div class="mb-3 card">
        <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                Live Chats
            </div>
        </div>
        <div class="no-gutters row">
          <b-table :striped="striped"
                   :bordered="bordered"
                   :outlined="outlined"
                   :small="small"
                   :hover="hover"
                   :responsive=true
                   :dark="dark"
                   :fixed="fixed"
                   :foot-clone="footClone"
                   :items="items"
                   :fields="fields">

              <template v-slot:cell(status)="data">
                <div class="badge badge-pill pt-2 badge-danger text-white">{{ data.value }}</div>
              </template>

              <template v-slot:cell(action)="data">

                <b-button variant="primary" class="mb-1">Mulai Chat</b-button>
                <b-button variant="danger" class="mb-1">Tutup Sesi</b-button>
              </template>
            </b-table>
        </div>
    </div>
  </div>
</template>

<script>
	import PageTitle from "./../architect/PageTitle2.vue";
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
          heading: 'Live Chats',
          subheading: 'Selamat Datang di halaman Live Chat Redagroku',
          icon: 'pe-7s-chat icon-gradient bg-tempting-azure',

          fields: [ 'no', 'token' , 'member_id', 'nama', 'status', 'admin', 'tanggal', 'action' ],
          items: [
            { no: 1, token: 'LCR123', member_id: '24', nama:'Hosea Dike Prasetyanto', status:'Sesi Berakhir', admin:'Hosea Dike Prasetyanto', tanggal:'20 November 2019' },
            { no: 2, token: 'LCR321', member_id: '24', nama:'Hosea Dike Prasetyanto', status:'Sesi Berakhir', admin:'Hosea Dike Prasetyanto', tanggal:'20 November 2019' },
            { no: 3, token: 'LCR213', member_id: '24', nama:'Hosea Dike Prasetyanto', status:'Sesi Berakhir', admin:'Hosea Dike Prasetyanto', tanggal:'20 November 2019' },
            { no: 4, token: 'LCR132', member_id: '24', nama:'Hosea Dike Prasetyanto', status:'Sesi Berakhir', admin:'Hosea Dike Prasetyanto', tanggal:'20 November 2019' },
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