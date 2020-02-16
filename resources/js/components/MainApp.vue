<template>
    <div class="app-container app-theme-white">
        <transition name="fade" mode="out-in" appear>
            <Header :nama=nama :status=status :foto=foto />
        </transition>
        <transition name="fade" mode="out-in" appear>
            <Sidebar/>
        </transition>
        <div class="app-main__outer">
            <div class="app-main__inner">
                <router-view></router-view>
            </div>
            <transition name="fade" mode="out-in" appear>
                <Footer/>
            </transition>
        </div>
        
    </div>
</template>

<script>
    import Header from './architect/Header';
    import Sidebar from './architect/Sidebar';
    import Footer from './architect/Footer';
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    // library.add(
    //     faCog,
    // );
    export default {
        name: 'app',
        components: {
            Header,
            Sidebar,
            Footer,
            VuePerfectScrollbar,
        },
        data: () => ({
          nama: 'Hosea Dike Prasetyanto',
          status: 'Administrator',
          foto: 'images/man.png',
        }),
        methods: {
        },
    }
</script>
