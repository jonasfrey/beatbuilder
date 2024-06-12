// here only struct/object/class/model definitions should be mentioned
// for example
class O_beat{
    constructor(
        s_name, 
        n_bpm, 
        b_playing, 
        a_o_sample
    ){
        this.s_name = s_name, 
        this.n_bpm = n_bpm, 
        this.b_playing = b_playing
        this.a_o_sample = a_o_sample
    }
}
class O_note{
    constructor(
        n_nor_start, 
        n_nor_duration, 
        n_nor_velocity, 
        n_nor_pitch
    ){
        this.n_nor_start = n_nor_start, 
        this.n_nor_duration = n_nor_duration, 
        this.n_nor_velocity = n_nor_velocity, 
        this.n_nor_pitch = n_nor_pitch
    }
}

class O_pattern{
    constructor(
        n_length_bars, 
        a_o_note
    ){
        this.n_length_bars = n_length_bars, 
        this.a_o_note = a_o_note
    }
}

class O_sample{
    constructor(
        s_name, 
        s_url_icon, 
        n_nor_start, 
        n_nor_end, 
        s_url_audio, 
        n_grid_divisions, 
        n_idx_a_o_pattern, 
        a_o_pattern
    ){
        this.s_name = s_name
        this.s_url_icon = s_url_icon
        this.n_nor_start = n_nor_start
        this.n_nor_end = n_nor_end, 
        this.s_url_audio = s_url_audio
        this.n_grid_divisions = n_grid_divisions
        this.n_idx_a_o_pattern = n_idx_a_o_pattern 
        this.a_o_pattern = a_o_pattern
    }
}


export {
    O_beat,
    O_note,
    O_pattern,
    O_sample
}