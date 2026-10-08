package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun GuestsScreen(onCreate:()->Unit){Card{Column{Text("Guests");Text("Domain-specific guests workflow");Button(onClick=onCreate){Text("Create")}}}}
