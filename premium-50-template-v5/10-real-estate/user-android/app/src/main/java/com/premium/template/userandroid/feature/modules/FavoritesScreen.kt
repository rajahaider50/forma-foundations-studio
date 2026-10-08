package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun FavoritesScreen(onCreate:()->Unit){Card{Column{Text("Favorites");Text("Domain-specific favorites workflow");Button(onClick=onCreate){Text("Create")}}}}
