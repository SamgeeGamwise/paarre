import { ComponentCustomProperties } from 'vue'
import { store } from './store/store'
import { RootState } from "@/types"

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: store<RootState>
    }
}