<script setup>
import { onBeforeMount, ref, computed } from 'vue';
import { useRoute } from 'vue-router'
import IconHeart from '../components/icons/IconHeart.vue';
import { useMovieStore } from '@/stores/movies';

const route = useRoute();

const movies = useMovieStore();
const { getMovieByID } = movies;

const movie = ref({})

onBeforeMount(() => {
    const idByUrl = Number(route.params.id);
    movie.value = getMovieByID(idByUrl);
})
</script>
<template>
    <div id="detail">
        <div class="detail-container">

            <h3>{{ movie.title }}</h3>

            <p>Director: {{ movie.director }}</p>
            <p>Year released: {{ movie.year }}</p>
            <p>Genre: {{ movie.genres }}</p>
        </div>
    </div>
</template>
<style scoped>
#detail {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    animation: move-left 2s linear reverse;
}

.detail-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.detail-container>h3 {
    font-size: 50px;
}

.detail-container>p {
    margin: 20px 0;
    font-size: 30px;
}

@keyframes move-left {
  from {
    left: 0;
  }
  to {
    left: 100%;
  }
}

@media (max-width: 600px) {
    .detail-container {
        width: 90%;
    }

    .detail-container>h3 {
        font-size: 30px;
    }

    .detail-container>p {
        font-size: 18px;
    }
}
</style>