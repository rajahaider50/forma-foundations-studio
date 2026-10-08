package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun WatchlistScreen(onCreate:()->Unit){Card{Column{Text("Watchlist");Text("Domain-specific watchlist workflow");Button(onClick=onCreate){Text("Create")}}}}
