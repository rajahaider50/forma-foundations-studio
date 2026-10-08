package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ReactionsScreen(onCreate:()->Unit){Card{Column{Text("Reactions");Text("Domain-specific reactions workflow");Button(onClick=onCreate){Text("Create")}}}}
