package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun GroupsScreen(onCreate:()->Unit){Card{Column{Text("Groups");Text("Domain-specific groups workflow");Button(onClick=onCreate){Text("Create")}}}}
