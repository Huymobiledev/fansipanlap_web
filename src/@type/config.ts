export type IPagination = {
    total: number;
    offset: number;
    limit: number;
}

export type IContractInfo = {
    type: string
    address: string
    name: string
    symbol: string
    decimals: number
    deposit_contract: string
}

export type ISongFilter = {
    text: string
    value: number
}

export type IMintingFee = {
    SING: number
    BUSD: number
}

export type IMintingConfig = {
    min_mic_level: 5,
    mint_count_max: 5,
    mint_cooldown: 48,
    fee: {
        bronze: Array<IMintingFee>
        silver: Array<IMintingFee>
        gold: Array<IMintingFee>
        platinum: Array<IMintingFee>
        diamond: Array<IMintingFee>
    }
}

export type ILevelDetail = {
    level: number
    fee: number
    resilience_rate: number
    add_earning_effect: number
    repair_rate: number
}

export type ILevelConfig = {
    max: number
    cooldown: number
    data: Array<ILevelDetail>
}

export type IDurabilityReward = {
    from: number
    to: number
    rate: number
}

export type IRange = {
    min: number
    max: number
}

export type IEarningEffectRange = {
    bronze: IRange
    silver: IRange
    gold: IRange
    platinum: IRange
    diamond: IRange
}

export type ILanguage = {
    name: string
    code: string
    image: string
}

export type IVoteRoom = {
    name: string
    code: string
    image: string
    pool: number
    total_user: number
}

export type IVote2EarnConfig = {
    min_score: 1,
    submit_record_fee: 0,
    room: Array<IVoteRoom>,
    banner: {
        coming_soon: string
        voting: string
        finish: string
        leader_board: string
    },
    vote_options: Array<number>
    guide: {
        en: string
        vi: string
        id: string
        ph: string
    }
}

export type IDonateValue = {
    value: number
}

export type IDonateConfig = {
    fee: number
    fee_send_token_percent: number
    limit: number
    data: Array<IDonateValue>
}

export type IAttribute = {
    text: string
    value: string
}

export type IChainConfig = {
    fraction_nft_contract: string
    master_nft_contract: string
    state: number
    symbol: string
    image: string
    chain_id: number
    name: string
    _id: string
    metadata_api: string
    data: Data
}

export interface Data {
    scan_url: string
    secret_type: string
    moralis_chain_name: string
    stable_symbol: string
    symbol: string
    max_gas: number
    rpc_urls: string[]
    tracking_nft_uri: string
    wallet_contract_address: WalletContractAddress[]
  }
  
  export interface WalletContractAddress {
    type: string
    address: string
    name: string
    symbol: string
    decimals: number
    deposit_contract: string
  }

export interface Reward {
    amount: number;
    free_rate: number;
    charge_rate: number;
    image: string;
}

export interface LuckyConfig {
    free_time: number;
    max_time: number;
    fee: number;
    lucky_wheel_faq: string;
    rewards: Reward[];
}

export interface LuckySingConfig {
    rate: number;
    max_multiplier: number;
    min_multiplier: number;
}

export interface ReferralTutorial {
    text: string;
}

export interface ReferralContent {
    referral_code: string;
    referral_tutorials: ReferralTutorial[];
    referral_rules: string;
    referral_faq: string;
    ís_shown: boolean;
}

export interface ReferralPhase {
    text: string,
    value: number,
}

export interface OtcPair {
    symbol: string,
    chain_id: number,
    tick_size: number,
    step_size: number,
    min_value: number,
    max_value: number,
}
export interface Rate {
    tier: string;
    name: string;
    img: string;
    percent: string;
}

export interface RateMic {
    tier_first: string;
    tier_second: string;
    data: Array<Rate>;
}

export interface RateMicBox {
    tier: string;
    name: string;
    img: string;
    data: Array<Rate>;
}

export interface UpgradeAccountLevelConfig {
    symbol_fee: string
    levels: Level[]
}

export interface Level {
    level: number
    description: string
    fee: number
    type?: string
}

export interface UserLevel {
    max: number
    symbol_fee: string
    feature: Feature
    data: Level[]
}

export interface Feature {
    send_token: number
    p2p_swap: number
    send_item: number
    ai_challenge: number
    otc: number
    pvp: number
    bridge: number
}

export type IAppConfig = {
    rpc_urls: Array<string>
    singsing_contract_address: string
    enable_wallet: boolean

    home_contents: any

    energy_to_time: number
    auth_url: string
    volume_beat: number
    volume_record: number
    max_volume_beat: number
    max_volume_record: number

    wallet_default_contract_address: Array<IContractInfo>

    volume_beat_headset: number
    volume_record_headset: number
    earning_exponential_factor: number
    energy_recovery_rate: number
    max_energy: number
    s2e_wap_url: string
    user_energy_current_default: number
    user_record_limit: number

    song_filters: Array<ISongFilter>

    artist_royalties: number
    system_fee: number
    repair_rate: number
    energy_burn: number
    mic_level_max: number

    timbre_score_weight: number
    pitch_score_weight: number

    lyric_score_weight: number

    minting_config: IMintingConfig

    level_config: ILevelConfig

    durability_reward: Array<IDurabilityReward>

    earning_effect_range: IEarningEffectRange

    languages: Array<ILanguage>

    vote2earn_config: IVote2EarnConfig

    token_price: number
    mic_trans_token: string
    maintenance: boolean

    donate_config: IDonateConfig

    earning_system_value: number

    mic_types: Array<IAttribute>
    mic_tiers: Array<IAttribute>

    network_chains: Array<IChainConfig>

    app_link_url: {
        gitbook_url: {
            user_guide_url: string,
            mic_attributes_url: string,
            how_to_play_v2e_url: string,
            v2e_v2_guide_url: string,
            ai_challenge_guide_url: string
            privacy_policy_url: string
        },
        telegram_pioneer_url: {
            vn: string,
            en: string
        },
        song_list_survey: string,
        download_app: string,
        term: string,
        deep_link: Array<any>
    }

    referral_enable: boolean
    referral_contents: ReferralContent

    lucky_square_alert_enable: boolean
    lucky_sing_config: LuckySingConfig
    lucky_config: LuckyConfig
    p2p_swap: {
        fee_percent: number,
        timeout_min: number,
    }
    verify_captcha_enable: boolean,
    referral_phase: Array<ReferralPhase>
    otc: {
        enable_otc_exchange: number,
        enable_otc_ranking: number,
        enable_otc_bridge: number,
        enable_otc_staking: number,
        maker_fee_percent: number,
        taker_fee_percent: number,
        pairs: Array<OtcPair>,
        bridge: any,
    }
    minting_url_faq: string
    ratio_open_mic: Array<RateMic>
    ratio_open_micbox: Array<RateMicBox>
    market_screen: Array<{ name: string, type: number }>
    report_contents: Array<any>
    upgrade_account_level_config: UpgradeAccountLevelConfig
    user_level: UserLevel
    gender_list: Array<{ text: string, value: string }>
    okara: {
        enable_event_okara: boolean,
        event_okara_giftcode_number: number,
        event_okara_giftcode_value: number,
        enable_buy_vip_with_sing: boolean,
        buy_vip_with_sing: number,
        okara_url: string,
        enable_view: boolean,
        banner_upgrade_okara_vip: string,
        banners: Array<any>
    }
    fusion: {
        data: {
            bronze: {
                fee: number,
                result: {
                    tier: string,
                    image: string,
                }
            }
            silve: {
                fee: number,
                result: {
                    tier: string,
                    image: string,
                }
            }
        }
    }
    report_song_contents: Array<string>
    payment_methods: any[]
    ktv: any,
    maintenance_message: any,
    tomoone: any,
    maintenance_config: {
        app: any,
        dapp: any,
        level: number,
    },
    whitelist_ips: Array<string>,
    deposit_oas_contract: string,
    deposit_busd_contract: string,
    transfer_ruby_config: any
}