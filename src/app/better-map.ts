//https://itnext.io/thoughts-on-map-and-set-in-typescript-efd43c3bf2ad
//https://javascript.info/map-set
class BetterMap<k, v> extends Map<k, v> {
    update(key: k, updater: (v: v, k: k) => v, notset: v = undefined) {
        if (this.has(key)) this.set(key, updater(this.get(key), key))
        else this.set(key, notset)
    }

    filter(predicate: (v: v, k: k) => boolean) {
        const newMap = new BetterMap<k, v>()
        const entries = Array.from(this.entries())
        for (const [key, value] of entries) {
            if (predicate(value, key)) newMap.set(key, value)
        }
        return newMap
    }

    merge(map: Map<k, v>, resolve: (k: k, a: v, b: v) => v = (k, a, b) => b) {
        const entries = Array.from(map.entries())
        for (const [key, value] of entries) {
            if (this.has(key)) this.set(key, resolve(key, this.get(key), value))
            else this.set(key, value)
        }
    }
}

class BetterSet<v> extends Set<v> {

    filter(predicate: (v: v) => boolean) {
        const newSet = new BetterSet<v>()
        const entries = Array.from(this.entries())
        for (const [value] of entries) {
            if (predicate(value)) newSet.add(value)
        }
        return newSet
    }

    merge(set: Set<v>) {
        const entries = Array.from(set.entries())
        for (const kv of entries) {
            this.add(kv[0])
        }
    }

    except(set: Set<v>) {
        const newSet = new Set<v>()
        const entries = Array.from(set.entries())
        for (const [value] of entries) {
            if (!this.has(value)) newSet.add(value)
        }
        return newSet
    }

    both(set: Set<v>) {
        const newSet = new Set<v>()
        const entries = Array.from(set.entries())
        for (const [value] of entries) {
            if (this.has(value)) newSet.add(value)
        }
        return newSet
    }
}